"use client";

import Link from "next/link";
import { ArrowRight, Bot, Calendar, Copy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToolConstellation } from "@/components/ToolConstellation";
import { useState } from "react";

function PulseBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
      </span>
      <span className="text-sm text-amber-700 font-medium">Powered by Claude AI</span>
    </div>
  );
}

function HeroSection() {
  const [idea, setIdea] = useState("");

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <PulseBadge />
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] text-balance">
            Stop Guessing.{" "}
            <span className="text-amber-600">Start Building.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-xl leading-relaxed">
            Describe your startup idea. Our AI agents analyze it and hand you a
            complete tool stack, week 1 sprint plan, and copy-paste prompts — in
            60 seconds.
          </p>
          <div className="mt-10 w-full max-w-xl">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="An AI tool that helps restaurants automate customer support..."
              rows={3}
              className="w-full p-4 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm text-base"
            />
            <p className="text-xs text-stone-400 mt-1 mb-4">
              {idea.trim().length < 30
                ? `${30 - idea.trim().length} more characters needed`
                : "✓ Ready to go"}
            </p>
            <div className="flex gap-3">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg flex-1"
              >
                <Link
                  href={`/coach${idea.trim().length >= 30 ? `?idea=${encodeURIComponent(idea)}` : ""}`}
                >
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-stone-300 bg-transparent hover:bg-stone-100 px-8 py-6 text-lg text-stone-800"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right column — Constellation + callouts */}
        <div className="hidden lg:flex flex-col items-center gap-6">
          <ToolConstellation ideaText={idea} />
          <div className="flex gap-12 px-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600">3</div>
              <div className="text-sm font-semibold text-[#0F172A] mt-1">AI Agents</div>
              <div className="text-xs text-stone-500">analyzing your idea in sequence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600">
                8.0<span className="text-2xl text-stone-400">/10</span>
              </div>
              <div className="text-sm font-semibold text-[#0F172A] mt-1">Plan Quality</div>
              <div className="text-xs text-stone-500">average eval score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="relative group">
      <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300">
        <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6">
          <Icon className="h-6 w-6 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "Multi-Agent Analysis",
      description:
        "3 specialized AI agents analyze your idea from every angle — technology, business, and execution.",
    },
    {
      icon: Calendar,
      title: "Actionable Sprint Plan",
      description:
        "Day-by-day tasks calibrated to your technical level. Know exactly what to do from day one.",
    },
    {
      icon: Copy,
      title: "Copy-Paste Prompts",
      description:
        "Ready-to-use prompts for every tool in your stack. Just copy, paste, and execute.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Everything You Need to{" "}
            <span className="text-amber-600">Ship Fast</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Our AI agents work together to give you a complete, actionable plan
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Describe your idea",
      description:
        "Tell us what you're building in plain English. No technical jargon needed.",
    },
    {
      number: "02",
      title: "Answer 4 quick questions",
      description:
        "Help us understand your context — technical level, timeline, and goals.",
    },
    {
      number: "03",
      title: "Get your complete build plan",
      description:
        "Receive your personalized tool stack, sprint plan, and prompts instantly.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            How It Works
          </h2>
          <p className="text-stone-600 text-lg">
            From idea to action plan in 3 simple steps
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-amber-500 via-amber-300 to-amber-100 hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-8">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-amber-500 shadow-sm flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-lg">
                    {step.number}
                  </span>
                </div>
                <div className="pt-3" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-stone-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-amber-600" />
          <span className="font-semibold text-stone-900">
            Founder Build Coach
          </span>
        </div>
        <p className="text-stone-500 text-sm">
          Built for Genesis founders. Powered by Claude.
        </p>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F5F4F0" }}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}