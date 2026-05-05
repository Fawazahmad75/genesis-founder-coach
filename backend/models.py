from pydantic import BaseModel

class StartRequest(BaseModel):
    idea: str

class PlanRequest(BaseModel):
    idea: str
    target_user: str
    technical_comfort: str
    budget: str
    timeline: str
    integrations: str