import anthropic
import json

client = anthropic.Anthropic()

def parse_json(text):
    text = text.strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[1]  # remove first line (```json or ```)
        text = text.rsplit("```", 1)[0]  # remove closing ```
    return json.loads(text.strip())

# Test inputs
idea = "I want to build an AI automation startup that helps small businesses automate their customer support using AI agents."
target_user = "Small business owners (restaurants, retail shops, local services) who get repetitive customer questions"
technical_comfort = "Non-technical — comfortable with no-code tools, never written code"
budget = "$0-100/month"
timeline = "4 weeks to MVP"
integrations = "WhatsApp or email for customer communication"

# ── Agent 1: Stack Picker ──
print("=" * 60)
print("AGENT 1: STACK PICKER")
print("=" * 60)

stack_prompt = f"""You are an expert AI tool advisor helping non-technical founders build their MVP fast using modern AI-powered development tools.

A founder has described their startup idea and answered some clarifying questions. Your job is to recommend a specific AI tool for each layer of their MVP, with a one-line justification for each choice.

The tools you can recommend from include (but are not limited to):
- UI/Frontend: v0.dev, Lovable, Bolt.new
- Backend/Logic: Replit, Cursor, Claude Code
- Automation/Workflows: n8n, Make, Zapier
- Database/Storage: Supabase, Airtable, Firebase
- AI/LLM layer: OpenAI API, Anthropic Claude API, Groq
- Design assets: Midjourney, Canva AI, Adobe Firefly
- Deployment: Railway, Vercel, Netlify

Rules:
- Only recommend tools appropriate for the founder's stated technical comfort level
- Be specific — never say "use an AI tool", say exactly which one and why
- If a layer is not needed for this MVP, say so explicitly
- Do not recommend enterprise tools or anything requiring DevOps expertise unless the founder is technical

Output ONLY valid JSON in this exact format:
{{
  "stack": [
    {{
      "layer": "layer name",
      "tool": "tool name",
      "reason": "one sentence why this tool fits this founder and idea"
    }}
  ],
  "stack_summary": "2-3 sentence plain English summary of the overall stack and why it fits"
}}

Founder input:
Idea: {idea}
Target user: {target_user}
Technical comfort: {technical_comfort}
Budget: {budget}
Timeline: {timeline}
Must-have integrations: {integrations}"""

r1 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1000,
    messages=[{"role": "user", "content": stack_prompt}]
)
stack_text = r1.content[0].text
print(stack_text)
stack_json = parse_json(stack_text)

# ── Agent 2: Sprint Planner ──
print("\n" + "=" * 60)
print("AGENT 2: SPRINT PLANNER")
print("=" * 60)

sprint_prompt = f"""You are an expert startup sprint planner helping non-technical founders execute their first week of building.

You have been given a founder's startup idea and their recommended AI tool stack. Your job is to produce a concrete, executable Week 1 sprint plan broken into daily tasks.

Rules:
- Tasks must be specific and actionable — not "set up backend", but "create a new project in Supabase, define a customers table with these columns: id, name, email, created_at"
- Calibrate task complexity to the founder's technical comfort level
- Day 1 should always end with something visible (even a static UI)
- Each day should have 2-4 tasks maximum — founders have other jobs
- Do not include tasks that require hiring, fundraising, or legal work
- Reference the specific tools from the stack in each task

Output ONLY valid JSON in this exact format:
{{
  "sprint": [
    {{
      "day": 1,
      "theme": "short theme label e.g. Foundation",
      "tasks": [
        "specific actionable task"
      ]
    }}
  ],
  "sprint_summary": "2-3 sentence plain English summary of what the founder will have built by end of week 1"
}}

Founder input:
Idea: {idea}
Target user: {target_user}
Technical comfort: {technical_comfort}
Timeline: {timeline}

Recommended stack:
{json.dumps(stack_json, indent=2)}"""

r2 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=2000,
    messages=[{"role": "user", "content": sprint_prompt}]
)
sprint_text = r2.content[0].text
print(sprint_text)
sprint_json = parse_json(sprint_text)

# ── Agent 3: Prompt Generator ──
print("\n" + "=" * 60)
print("AGENT 3: PROMPT GENERATOR")
print("=" * 60)

prompt_gen_prompt = f"""You are an expert at writing prompts for AI-powered development tools. Your job is to write ready-to-use, copy-paste prompts that a non-technical founder can use immediately with each tool in their stack.

Rules:
- Each prompt must be specific to this founder's idea — not generic templates
- Prompts must be complete and ready to paste — no placeholders like [YOUR IDEA HERE]
- Write prompts in plain language the tool will understand
- For UI tools (v0, Lovable, Bolt): write a full build prompt describing the UI
- For backend/automation tools: write a setup or workflow prompt
- For AI/LLM tools: write a system prompt they can use directly
- Do not write a prompt for layers marked as "not needed"

Output ONLY valid JSON in this exact format:
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
{json.dumps(stack_json, indent=2)}

Sprint plan:
{json.dumps(sprint_json, indent=2)}"""

r3 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=8000,
    messages=[{"role": "user", "content": prompt_gen_prompt}]
)
prompts_text = r3.content[0].text
print(prompts_text)

# For testing, skip JSON parse of Agent 3 — just use empty dict to feed Agent 4
prompts_json = {"prompts": [{"tool": "see above output", "layer": "all", "prompt": "see above"}]}

# ── Agent 4: Eval Judge ──
print("\n" + "=" * 60)
print("AGENT 4: EVAL JUDGE")
print("=" * 60)

full_plan = {
    "stack": stack_json,
    "sprint": sprint_json,
    "prompts": prompts_json
}

eval_prompt = f"""You are a strict evaluator of AI-generated startup build plans. You have been given a founder's idea and a complete build plan generated by an AI system. Your job is to score the plan honestly across four dimensions.

Scoring dimensions:
1. Specificity (1-10): Are the tasks and tool recommendations concrete enough to execute without guessing?
2. Realism (1-10): Is the timeline and task complexity feasible for this founder's stated technical level?
3. Tool-fit (1-10): Do the recommended tools actually solve the stated problem well?
4. Completeness (1-10): Does the plan cover all layers needed for a working MVP?

Rules:
- Be harsh. A score of 8+ means a founder could execute this plan tomorrow with no additional help.
- Score 5 or below means there is a real gap that would block execution.
- Your reasoning must be specific — reference actual parts of the plan, not generic observations.
- Overall score = (Specificity * 0.3) + (Realism * 0.3) + (Tool-fit * 0.2) + (Completeness * 0.2)

Output ONLY valid JSON in this exact format:
{{
  "scores": {{
    "specificity": {{ "score": 0, "reasoning": "one to two sentences" }},
    "realism": {{ "score": 0, "reasoning": "one to two sentences" }},
    "tool_fit": {{ "score": 0, "reasoning": "one to two sentences" }},
    "completeness": {{ "score": 0, "reasoning": "one to two sentences" }}
  }},
  "overall_score": 0.0,
  "summary": "2-3 sentence plain English verdict on the plan quality and the single most important thing to improve"
}}

Founder idea: {idea}
Technical comfort: {technical_comfort}

Full generated plan:
{json.dumps(full_plan, indent=2)}"""

r4 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1000,
    messages=[{"role": "user", "content": eval_prompt}]
)
eval_text = r4.content[0].text
print(eval_text)

print("\n✅ All 4 agents ran successfully")