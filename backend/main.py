import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import anthropic
from dotenv import load_dotenv

from models import StartRequest, PlanRequest
from agents import stream_plan
from utils import parse_json

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))


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

    response = anthropic_client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=800,
        messages=[{"role": "user", "content": prompt}]
    )
    text = response.content[0].text
    return parse_json(text)


@app.post("/coach/plan")
async def coach_plan(req: PlanRequest):
    return StreamingResponse(
        stream_plan(req, anthropic_client),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@app.get("/health")
async def health():
    return {"status": "ok"}