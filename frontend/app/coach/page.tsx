"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/coach/sidebar";
import { MainContent } from "@/components/coach/main-content";
import type { Question, AgentState, PlanResult } from "@/lib/types";

const API_BASE = "https://genesis-founder-coach-production.up.railway.app";

function transformPlanResult(data: any): PlanResult {
  return {
    score: {
      overall: data.eval?.overall_score || 0,
      dimensions: {
        specificity: data.eval?.scores?.specificity?.score || 0,
        realism: data.eval?.scores?.realism?.score || 0,
        tool_fit: data.eval?.scores?.tool_fit?.score || 0,
        completeness: data.eval?.scores?.completeness?.score || 0,
      },
    },
    toolStack: (data.stack?.stack || []).map((item: any) => ({
      layer: item.layer,
      name: item.tool,
      reason: item.reason,
    })),
    sprint: (data.sprint?.sprint || []).map((day: any) => ({
      day: day.day,
      theme: day.theme,
      tasks: (day.tasks || []).map((t: string) => ({ task: t })),
    })),
    prompts: (data.prompts?.prompts || []).map((p: any) => ({
      title: p.layer,
      tool: p.tool,
      prompt: p.prompt,
    })),
  };
}

export default function CoachPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [idea, setIdea] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [agents, setAgents] = useState<AgentState[]>([]);
  const [planResult, setPlanResult] = useState<PlanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyzeIdea = useCallback(async () => {
    if (!idea.trim()) return;
    setIsLoadingQuestions(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/coach/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      if (!response.ok) throw new Error("Failed to analyze idea");
      const data = await response.json();
      setQuestions(data.questions || []);
      setStep(2);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoadingQuestions(false);
    }
  }, [idea]);

  const handleSSEEvent = useCallback((eventType: string, data: any) => {
    switch (eventType) {
      case "agent_start":
        setAgents((prev) => [
          ...prev,
          { name: data.name || "", status: "thinking", content: "" },
        ]);
        break;
      case "token":
        setAgents((prev) => {
          const updated = [...prev];
          const lastAgent = updated[updated.length - 1];
          if (lastAgent) lastAgent.content += data.token || "";
          return updated;
        });
        break;
      case "agent_done":
        setAgents((prev) => {
          const updated = [...prev];
          const thinkingAgent = updated.find((a) => a.status === "thinking");
          if (thinkingAgent) thinkingAgent.status = "done";
          return updated;
        });
        break;
      case "complete":
        if (data) setPlanResult(transformPlanResult(data));
        break;
    }
  }, []);

  const handleGeneratePlan = useCallback(async () => {
    if (isGeneratingPlan || planResult) return;
    setIsGeneratingPlan(true);
    setError(null);
    setPlanResult(null);
    setAgents([]);
    try {
      const response = await fetch(`${API_BASE}/coach/plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea,
          target_user: answers["target_user"] || "",
          technical_comfort: answers["technical_comfort"] || "",
          budget: answers["budget"] || "",
          timeline: answers["timeline"] || "",
          integrations: answers["integrations"] || "",
        }),
      });
      if (!response.ok) throw new Error("Failed to generate plan");
      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body");
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        let currentEvent = "";
        for (const line of lines) {
          if (line.startsWith("event: ")) {
            currentEvent = line.slice(7).trim();
          } else if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              handleSSEEvent(currentEvent, data);
              currentEvent = "";
            } catch {
              // skip
            }
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsGeneratingPlan(false);
    }
  }, [idea, answers, handleSSEEvent, isGeneratingPlan, planResult]);

  const handleStartOver = useCallback(() => {
    setStep(1);
    setIdea("");
    setQuestions([]);
    setAnswers({});
    setAgents([]);
    setPlanResult(null);
    setError(null);
  }, []);

  const handleRetry = useCallback(() => {
    setError(null);
    if (step === 1) handleAnalyzeIdea();
    else handleGeneratePlan();
  }, [step, handleAnalyzeIdea, handleGeneratePlan]);

  const handleAnswerChange = useCallback((questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <Sidebar
        step={step}
        idea={idea}
        setIdea={setIdea}
        questions={questions}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        onAnalyzeIdea={handleAnalyzeIdea}
        onGeneratePlan={handleGeneratePlan}
        isLoadingQuestions={isLoadingQuestions}
        isGeneratingPlan={isGeneratingPlan}
        planDone={!!planResult}
        onStartOver={handleStartOver}
      />
      <MainContent
        agents={agents}
        planResult={planResult}
        isGeneratingPlan={isGeneratingPlan}
        error={error}
        onRetry={handleRetry}
      />
    </div>
  );
}