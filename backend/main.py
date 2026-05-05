import os
import json
import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from groq import Groq
import anthropic
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

class StartRequest(BaseModel):
    idea: str

class PlanRequest(BaseModel):
    idea: str
    target_user: str
    technical_comfort: str
    budget: str
    timeline: str
    integrations: str

def parse_json(text: str) -> dict:
    text = text.strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[1]
        text = text.rsplit("```", 1)[0]
    return json.loads(text.strip())

@app.post("/coach/start")
async def coach_start(req: StartRequest):
    prompt = f"""A founder has described their startup idea. Generate exactly 4 clarifying questions to understand what they need to build their MVP.

The questions must cover these 4 areas (one question each):
1. Who is the target user (be specific about the person, not just the market)
2. What is their technical comfort level (never coded, used no-code tools, some coding experience, technical)
3. What is their monthly budget for tools and infrastructure
4. What is their timeline to MVP and any must-have integrations

Return ONLY valid JSON, no markdown fences:
{{
  "questions": [
    {{"id": "target_user", "label": "Who is your target user?", "placeholder": "e.g. Small restaurant owners who..."}},
    {{"id": "technical_comfort", "label": "...", "placeholder": "..."}},
    {{"id": "budget", "label": "...", "placeholder": "..."}},
    {{"id": "integrations", "label": "...", "placeholder": "..."}}
  ]
}}

Make each question specific and useful for recommending the right AI tools. Tailor the questions to this idea:
{req.idea}"""

    response = groq_client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=800,
        temperature=0.3,
    )
    text = response.choices[0].message.content
    return parse_json(text)

STACK_PICKER_PROMPT = """You are an expert AI tool advisor helping non-technical founders build their MVP fast using modern AI-powered development tools.

Recommend a specific AI tool for each layer of their MVP with a one-line justification.

Tools to recommend from:
- UI/Frontend: v0.dev, Lovable, Bolt.new
- Backend/Logic: Replit, Cursor, Claude Code
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
- NEVER recommend Replit, Cursor, or Claude Code to non-technical founders — these require coding knowledge
- For non-technical founders, the UI tool must be Lovable, Bolt.new, or v0.dev — never a raw code editor
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


async def stream_plan(req: PlanRequest):
    def sse(event: str, data: dict) -> str:
        return f"event: {event}\ndata: {json.dumps(data)}\n\n"

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


@app.post("/coach/plan")
async def coach_plan(req: PlanRequest):
    return StreamingResponse(
        stream_plan(req),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )

@app.get("/health")
async def health():
    return {"status": "ok"}