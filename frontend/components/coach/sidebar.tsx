"use client";

import { Sparkles, Loader2, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Question } from "@/lib/types";

interface SidebarProps {
  step: 1 | 2;
  idea: string;
  setIdea: (idea: string) => void;
  questions: Question[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onAnalyzeIdea: () => void;
  onGeneratePlan: () => void;
  isLoadingQuestions: boolean;
  isGeneratingPlan: boolean;
  planDone: boolean;
  onStartOver: () => void;
}

export function Sidebar({
  step,
  idea,
  setIdea,
  questions,
  answers,
  onAnswerChange,
  onAnalyzeIdea,
  onGeneratePlan,
  isLoadingQuestions,
  isGeneratingPlan,
  planDone,
  onStartOver,
}: SidebarProps) {
  const placeholders = [
    "A marketplace for local farmers to sell directly to restaurants...",
    "An AI tool that helps freelancers write better proposals...",
    "A mobile app that gamifies personal finance for Gen Z...",
  ];

  const randomPlaceholder =
    placeholders[Math.floor(Math.random() * placeholders.length)];

  return (
    <aside className="w-full lg:w-[35%] bg-white border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8 flex flex-col min-h-[40vh] lg:min-h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="h-5 w-5 text-teal-600" />
        <span className="font-semibold text-stone-900">Founder Build Coach</span>
        <span className="ml-2 px-2 py-0.5 text-xs bg-teal-50 text-teal-700 rounded-full border border-teal-200">
          AI
        </span>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
            step >= 1 ? "bg-teal-600 text-white" : "bg-stone-100 text-stone-500"
          }`}
        >
          1
        </div>
        <div className="flex-1 h-px bg-stone-200" />
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
            step >= 2 ? "bg-teal-600 text-white" : "bg-stone-100 text-stone-500"
          }`}
        >
          2
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Step 1: Idea Input */}
        <div className={step === 1 ? "block" : "hidden lg:block"}>
          <label className="block text-sm font-medium text-stone-900 mb-2">
            What are you building?
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder={randomPlaceholder}
            className="w-full h-32 lg:h-40 p-4 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm"
            disabled={step === 2}
          />
          {step === 1 && (
            <Button
              onClick={onAnalyzeIdea}
              disabled={!idea.trim() || isLoadingQuestions}
              className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white"
            >
              {isLoadingQuestions ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze My Idea
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>

        {/* Step 2: Questions */}
        {step === 2 && questions.length > 0 && (
          <div className="mt-6 lg:mt-8 space-y-4">
            <p className="text-sm text-stone-500 mb-4">
              Answer a few questions to personalize your plan:
            </p>
            {questions.map((question) => (
              <div key={question.id}>
                <label className="block text-sm font-medium text-stone-900 mb-2">
                  {question.label}
                </label>
                {question.type === "select" && question.options ? (
                  <select
                    value={answers[question.id] || ""}
                    onChange={(e) =>
                      onAnswerChange(question.id, e.target.value)
                    }
                    disabled={planDone || isGeneratingPlan}
                    className="w-full p-3 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select an option</option>
                    {question.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={answers[question.id] || ""}
                    onChange={(e) =>
                      onAnswerChange(question.id, e.target.value)
                    }
                    placeholder={question.placeholder}
                    disabled={planDone || isGeneratingPlan}
                    className="w-full p-3 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                )}
              </div>
            ))}

            {/* Generate button — hidden once plan is done */}
            {!planDone && (
              <Button
                onClick={onGeneratePlan}
                disabled={isGeneratingPlan}
                className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white"
              >
                {isGeneratingPlan ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate My Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )}

            {/* Start Over — shown once plan is done */}
            {planDone && (
              <button
                onClick={onStartOver}
                className="w-full mt-6 py-3 text-sm text-stone-500 hover:text-stone-900 border border-stone-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Start Over
              </button>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}