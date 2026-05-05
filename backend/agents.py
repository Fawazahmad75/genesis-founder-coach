import json
import asyncio
import anthropic
from utils import parse_json

STACK_PICKER_PROMPT = """You are an expert AI tool advisor helping non-technical founders build their MVP fast using modern AI-powered development tools.

Recommend a specific AI tool for each layer of their MVP with a one-line justification.

Tools to recommend from:
- UI/Frontend: Lovable (best for non-technical), v0.dev (good for technical founders)
- Backend/Logic: not needed for most non-technical founders — automation tools handle this layer. For technical founders: Replit, Cursor, Claude Code
- Automation/Workflows: n8n, Make, Zapier
- Database/Storage: Supabase, Airtable, Firebase
- AI/LLM layer: OpenAI API, Anthropic Claude API, Groq
- Design assets: Midjourney, Canva AI, Adobe Firefly
- Deployment: Railway, Vercel, Netlify

Rules:
- Only recommend tools appropriate for the founder's technical comfort level
- Be specific — name the exact tool and why
- If a layer is not needed, say so explicitly
- Do not recommend tools requiring DevOps expertise for non-technical founders
- NEVER recommend Replit, Bolt.new, or Cursor as a backend tool for non-technical founders — these require coding knowledge
- For non-technical founders needing backend/logic, recommend n8n or Make as the automation layer — no separate backend needed
- NEVER recommend WhatsApp Business API directly — always recommend Twilio WhatsApp sandbox as the integration path
- For automation, prefer n8n or Make over Zapier for AI-heavy workflows — Zapier's OpenAI integration is limited

Output ONLY valid JSON, no markdown fences:
{{
  "stack": [
    {{
      "layer": "layer name",
      "tool": "tool name",
      "reason": "one sentence why this tool fits this founder and idea"
    }}
  ],
  "stack_summary": "2-3 sentence plain English summary of the overall stack"
}}

Founder input:
Idea: {idea}
Target user: {target_user}
Technical comfort: {technical_comfort}
Budget: {budget}
Timeline: {timeline}
Must-have integrations: {integrations}"""

SPRINT_PLANNER_PROMPT = """You are an expert startup sprint planner helping non-technical founders execute their first week of building.

Produce a concrete, executable Week 1 sprint plan broken into daily tasks.

Rules:
- Tasks must be specific and actionable with exact steps, field names, and example values
- Calibrate complexity to the founder's technical comfort level
- Day 1 must end with something visible
- Each day has 2-4 tasks maximum
- Reference the specific tools from the stack in each task

Output ONLY valid JSON, no markdown fences:
{{
  "sprint": [
    {{
      "day": 1,
      "theme": "short theme label",
      "tasks": ["specific actionable task"]
    }}
  ],
  "sprint_summary": "2-3 sentence summary of what gets built by end of week 1"
}}

Founder input:
Idea: {idea}
Target user: {target_user}
Technical comfort: {technical_comfort}
Timeline: {timeline}

Recommended stack:
{stack_json}"""

PROMPT_GENERATOR_PROMPT = """You are an expert at writing prompts for AI-powered development tools. Write ready-to-use, copy-paste prompts a non-technical founder can use immediately.

Rules:
- Each prompt must be specific to this founder's idea — not generic
- Prompts must be complete and ready to paste with no placeholders
- For UI tools: write a full build prompt describing the UI in detail
- For automation tools: write a step-by-step workflow setup prompt
- For AI/LLM tools: write a system prompt they can use directly
- Do not write prompts for layers marked as not needed

Output ONLY valid JSON, no markdown fences:
{{
  "prompts": [
    {{
      "tool": "tool name",
      "layer": "layer name",
      "prompt": "the full ready-to-use prompt"
    }}
  ]
}}

Founder input:
Idea: {idea}
Target user: {target_user}

Recommended stack:
{stack_json}

Sprint plan:
{sprint_json}"""

EVAL_JUDGE_PROMPT = """You are a strict evaluator of AI-generated startup build plans. Score the plan honestly across four dimensions.

Scoring:
1. Specificity (1-10): Are tasks concrete enough to execute without guessing?
2. Realism (1-10): Is the timeline feasible for this founder's technical level?
3. Tool-fit (1-10): Do the recommended tools actually solve the stated problem?
4. Completeness (1-10): Does the plan cover all layers needed for a working MVP?

Rules:
- Be harsh. 8+ means a founder could execute tomorrow with no extra help.
- 5 or below means there is a real gap blocking execution.
- Reference specific parts of the plan in your reasoning.
- Overall score = (Specificity * 0.3) + (Realism * 0.3) + (Tool-fit * 0.2) + (Completeness * 0.2)

Output ONLY valid JSON, no markdown fences:
{{
  "scores": {{
    "specificity": {{"score": 0, "reasoning": "1-2 sentences"}},
    "realism": {{"score": 0, "reasoning": "1-2 sentences"}},
    "tool_fit": {{"score": 0, "reasoning": "1-2 sentences"}},
    "completeness": {{"score": 0, "reasoning": "1-2 sentences"}}
  }},
  "overall_score": 0.0,
  "summary": "2-3 sentence verdict and single most important thing to improve"
}}

Founder idea: {idea}
Technical comfort: {technical_comfort}

Full generated plan:
{full_plan_json}"""


async def stream_plan(req, anthropic_client: anthropic.Anthropic):
    def sse(event: str, data: dict) -> str:
        return f"event: {event}\ndata: {json.dumps(data)}\n\n"

    # ── Agent 1: Stack Picker ──
    yield sse("agent_start", {"agent": 1, "name": "Stack Picker", "message": "Analyzing your idea and selecting the right tools..."})

    stack_text = ""
    with anthropic_client.messages.stream(
        model="claude-sonnet-4-6",
        max_tokens=1500,
        messages=[{"role": "user", "content": STACK_PICKER_PROMPT.format(
            idea=req.idea, target_user=req.target_user,
            technical_comfort=req.technical_comfort, budget=req.budget,
            timeline=req.timeline, integrations=req.integrations,
        )}],
    ) as stream:
        for token in stream.text_stream:
            stack_text += token
            if token:
                yield sse("token", {"agent": 1, "token": token})

    await asyncio.sleep(0)

    try:
        stack_json = parse_json(stack_text)
    except Exception as e:
        yield sse("error", {"message": f"Stack Picker failed: {str(e)}"})
        return

    yield sse("agent_done", {"agent": 1, "result": stack_json})

    # ── Agent 2: Sprint Planner ──
    yield sse("agent_start", {"agent": 2, "name": "Sprint Planner", "message": "Building your Week 1 execution plan..."})

    sprint_text = ""
    with anthropic_client.messages.stream(
        model="claude-sonnet-4-6",
        max_tokens=3000,
        messages=[{"role": "user", "content": SPRINT_PLANNER_PROMPT.format(
            idea=req.idea, target_user=req.target_user,
            technical_comfort=req.technical_comfort, timeline=req.timeline,
            stack_json=json.dumps(stack_json, indent=2),
        )}],
    ) as stream:
        for token in stream.text_stream:
            sprint_text += token
            if token:
                yield sse("token", {"agent": 2, "token": token})

    await asyncio.sleep(0)

    try:
        sprint_json = parse_json(sprint_text)
    except Exception as e:
        yield sse("error", {"message": f"Sprint Planner failed: {str(e)}"})
        return

    yield sse("agent_done", {"agent": 2, "result": sprint_json})

    # ── Agent 3: Prompt Generator ──
    yield sse("agent_start", {"agent": 3, "name": "Prompt Generator", "message": "Writing your copy-paste prompts for each tool..."})

    prompts_text = ""
    with anthropic_client.messages.stream(
        model="claude-sonnet-4-6",
        max_tokens=6000,
        messages=[{"role": "user", "content": PROMPT_GENERATOR_PROMPT.format(
            idea=req.idea, target_user=req.target_user,
            stack_json=json.dumps(stack_json, indent=2),
            sprint_json=json.dumps(sprint_json, indent=2),
        )}],
    ) as stream:
        for token in stream.text_stream:
            prompts_text += token
            if token:
                yield sse("token", {"agent": 3, "token": token})

    await asyncio.sleep(0)

    try:
        prompts_json = parse_json(prompts_text)
    except Exception as e:
        yield sse("error", {"message": f"Prompt Generator failed: {str(e)}"})
        return

    yield sse("agent_done", {"agent": 3, "result": prompts_json})

    # ── Agent 4: Eval Judge ──
    yield sse("agent_start", {"agent": 4, "name": "Plan Evaluator", "message": "Evaluating your plan quality across 4 dimensions..."})

    eval_text = ""
    full_plan = {"stack": stack_json, "sprint": sprint_json, "prompts": prompts_json}

    with anthropic_client.messages.stream(
        model="claude-sonnet-4-6",
        max_tokens=1000,
        messages=[{"role": "user", "content": EVAL_JUDGE_PROMPT.format(
            idea=req.idea, technical_comfort=req.technical_comfort,
            full_plan_json=json.dumps(full_plan, indent=2),
        )}],
    ) as stream:
        for token in stream.text_stream:
            eval_text += token
            if token:
                yield sse("token", {"agent": 4, "token": token})

    await asyncio.sleep(0)

    try:
        eval_json = parse_json(eval_text)
    except Exception as e:
        yield sse("error", {"message": f"Eval Judge failed: {str(e)}"})
        return

    yield sse("agent_done", {"agent": 4, "result": eval_json})

    yield sse("complete", {
        "stack": stack_json,
        "sprint": sprint_json,
        "prompts": prompts_json,
        "eval": eval_json,
    })