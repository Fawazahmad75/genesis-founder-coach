"use client";

import { useState } from "react";
import { AlertCircle, RefreshCw, Sparkles, Check, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgentState, PlanResult } from "@/lib/types";

interface MainContentProps {
  agents: AgentState[];
  planResult: PlanResult | null;
  isGeneratingPlan: boolean;
  error: string | null;
  onRetry: () => void;
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-50 flex items-center justify-center animate-pulse">
          <Sparkles className="h-8 w-8 text-teal-600" />
        </div>
        <p className="text-xl text-stone-600">
          Your build plan will appear here
        </p>
        <p className="text-sm text-stone-400 mt-2">
          Start by describing your idea in the sidebar
        </p>
      </div>
    </div>
  );
}

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
        <p className="text-xl text-stone-900 mb-2">Something went wrong</p>
        <p className="text-sm text-stone-500 mb-6">{message}</p>
        <Button onClick={onRetry} variant="outline" className="gap-2 border-stone-300 text-stone-700 hover:bg-stone-100">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}

function AgentCard({ agent, index }: { agent: AgentState; index: number }) {
  return (
    <div
      className={`p-6 rounded-xl bg-white border transition-all duration-500 ${
        agent.status === "thinking"
          ? "border-teal-300 shadow-md"
          : "border-stone-200 shadow-sm"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-stone-900">{agent.name}</h3>
        {agent.status === "thinking" ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-teal-50 text-teal-700 rounded-full animate-pulse">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-ping" />
            Thinking...
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-green-50 text-green-600 rounded-full">
            <Check className="h-3 w-3" />
            Done
          </span>
        )}
      </div>
      <div className="text-sm text-stone-600 leading-relaxed whitespace-pre-wrap max-h-40 overflow-y-auto">
        {agent.content || "..."}
      </div>
    </div>
  );
}

function AgentsView({ agents }: { agents: AgentState[] }) {
  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <h2 className="text-xl font-semibold text-stone-900 mb-6">
        Analyzing your idea...
      </h2>
      <div className="grid gap-4">
        {agents.map((agent, index) => (
          <AgentCard key={agent.name} agent={agent} index={index} />
        ))}
      </div>
    </div>
  );
}

function ScoreCard({ score }: { score: PlanResult["score"] }) {
  const getScoreColor = (value: number) => {
    if (value >= 8) return "text-green-500";
    if (value >= 6) return "text-amber-500";
    return "text-red-500";
  };

  const getScoreBgColor = (value: number) => {
    if (value >= 8) return "bg-green-500";
    if (value >= 6) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-stone-900">Plan Quality Score</h3>
        <span className={`text-3xl font-bold ${getScoreColor(score.overall)}`}>
          {score.overall.toFixed(1)}/10
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(score.dimensions).map(([key, value]) => (
          <div key={key}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-stone-500 capitalize">{key}</span>
              <span className="text-stone-900">{value.toFixed(1)}</span>
            </div>
            <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${getScoreBgColor(value)}`}
                style={{ width: `${value * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolStackTab({ tools }: { tools: PlanResult["toolStack"] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="p-4 rounded-lg bg-white border border-stone-200 shadow-sm"
        >
          <span className="inline-block px-2 py-0.5 text-xs bg-teal-50 text-teal-700 rounded mb-2">
            {tool.layer}
          </span>
          <h4 className="font-semibold text-stone-900">{tool.name}</h4>
          <p className="text-sm text-stone-500 mt-1">{tool.reason}</p>
        </div>
      ))}
    </div>
  );
}

function SprintTab({ sprint }: { sprint: PlanResult["sprint"] }) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <div className="space-y-3">
      {sprint.map((day) => (
        <div
          key={day.day}
          className="rounded-lg bg-white border border-stone-200 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold text-stone-900">
                Day {day.day}
              </span>
              <span className="px-2 py-0.5 text-xs bg-teal-50 text-teal-700 rounded">
                {day.theme}
              </span>
            </div>
            <span className="text-stone-400">
              {openDay === day.day ? "−" : "+"}
            </span>
          </button>
          {openDay === day.day && (
            <div className="px-4 pb-4 space-y-2">
              {day.tasks.map((task, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 p-2 rounded hover:bg-stone-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-stone-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-sm text-stone-700">{task.task}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PromptsTab({ prompts }: { prompts: PlanResult["prompts"] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-4">
      {prompts.map((prompt, index) => (
        <div
          key={index}
          className="rounded-lg bg-white border border-stone-200 shadow-sm overflow-hidden"
        >
          <div className="p-4 border-b border-stone-200 flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-stone-900">{prompt.title}</h4>
              <span className="text-xs text-stone-500">
                For: {prompt.tool}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCopy(prompt.prompt, index)}
              className="gap-2 text-stone-600 hover:text-stone-900"
            >
              {copiedIndex === index ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <pre className="p-4 text-sm text-stone-700 whitespace-pre-wrap font-mono bg-stone-50">
            {prompt.prompt}
          </pre>
        </div>
      ))}
    </div>
  );
}

function ResultsView({ planResult }: { planResult: PlanResult }) {
  const [activeTab, setActiveTab] = useState<"tools" | "sprint" | "prompts">("tools");

  const tabs = [
    { id: "tools" as const, label: "Tool Stack" },
    { id: "sprint" as const, label: "Week 1 Sprint" },
    { id: "prompts" as const, label: "Copy-paste Prompts" },
  ];

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <ScoreCard score={planResult.score} />

      <div className="flex gap-2 mb-6 border-b border-stone-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? "text-teal-600"
                : "text-stone-500 hover:text-stone-900"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" />
            )}
          </button>
        ))}
      </div>

      {activeTab === "tools" && <ToolStackTab tools={planResult.toolStack} />}
      {activeTab === "sprint" && <SprintTab sprint={planResult.sprint} />}
      {activeTab === "prompts" && <PromptsTab prompts={planResult.prompts} />}
    </div>
  );
}

export function MainContent({
  agents,
  planResult,
  isGeneratingPlan,
  error,
  onRetry,
}: MainContentProps) {
  return (
    <main className="flex-1 bg-[#fafafa] relative flex flex-col min-h-[60vh] lg:min-h-screen">
      <GridBackground />
      <div className="relative z-10 flex-1 flex flex-col">
        {error ? (
          <ErrorState message={error} onRetry={onRetry} />
        ) : planResult ? (
          <ResultsView planResult={planResult} />
        ) : agents.length > 0 || isGeneratingPlan ? (
          <AgentsView agents={agents} />
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  );
}
