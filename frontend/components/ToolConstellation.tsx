"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const TOOLS = [
  { id: "Lovable", category: "UI", desc: "Build full-stack apps with natural language" },
  { id: "Bolt.new", category: "UI", desc: "Instant full-stack web app scaffolding" },
  { id: "v0.dev", category: "UI", desc: "Generate UI components from prompts" },
  { id: "Claude Code", category: "AI", desc: "AI coding assistant in your terminal" },
  { id: "n8n", category: "Automation", desc: "Visual automation for AI-heavy workflows" },
  { id: "Make", category: "Automation", desc: "No-code automation with advanced logic" },
  { id: "Zapier", category: "Automation", desc: "Connect apps with simple automation" },
  { id: "Supabase", category: "Database", desc: "Postgres database with real-time + auth" },
  { id: "Airtable", category: "Database", desc: "Spreadsheet-style database for non-technical founders" },
  { id: "Firebase", category: "Database", desc: "Google's real-time NoSQL database" },
  { id: "OpenAI API", category: "AI", desc: "GPT-4o for AI features in your product" },
  { id: "Anthropic Claude", category: "AI", desc: "Best-in-class reasoning and instruction-following" },
  { id: "Groq", category: "AI", desc: "Ultra-fast LLM inference at low cost" },
  { id: "Vercel", category: "Deployment", desc: "One-click deployment for Next.js frontends" },
  { id: "Railway", category: "Deployment", desc: "Simple deployment for Python backends" },
  { id: "Canva AI", category: "Design", desc: "Design assets without a designer" },
  { id: "Midjourney", category: "Design", desc: "AI image generation for product visuals" },
  { id: "Replit", category: "Backend", desc: "Browser-based coding environment" },
];

const CATEGORY_COLORS: Record<string, string> = {
  UI: "#D97706",
  AI: "#92400E",
  Automation: "#0F766E",
  Database: "#57534E",
  Deployment: "#374151",
  Design: "#9333EA",
  Backend: "#1D4ED8",
};

const KEYWORD_MAP: Record<string, string[]> = {
  lovable: ["Lovable"],
  bolt: ["Bolt.new"],
  v0: ["v0.dev"],
  claude: ["Anthropic Claude", "Claude Code"],
  n8n: ["n8n"],
  make: ["Make"],
  zapier: ["Zapier"],
  supabase: ["Supabase"],
  airtable: ["Airtable"],
  firebase: ["Firebase"],
  openai: ["OpenAI API"],
  groq: ["Groq"],
  vercel: ["Vercel"],
  railway: ["Railway"],
  canva: ["Canva AI"],
  midjourney: ["Midjourney"],
  replit: ["Replit"],
  automation: ["n8n", "Make", "Zapier"],
  database: ["Supabase", "Airtable", "Firebase"],
  ai: ["OpenAI API", "Anthropic Claude", "Groq", "Claude Code"],
  deploy: ["Vercel", "Railway"],
  design: ["Canva AI", "Midjourney"],
  ui: ["Lovable", "Bolt.new", "v0.dev"],
  "no-code": ["Lovable", "n8n", "Airtable"],
  nocode: ["Lovable", "n8n", "Airtable"],
  backend: ["Supabase", "Replit", "Railway"],
  frontend: ["Lovable", "Bolt.new", "v0.dev", "Vercel"],
  restaurant: ["n8n", "Airtable", "OpenAI API"],
  customer: ["n8n", "OpenAI API", "Airtable"],
  support: ["n8n", "OpenAI API", "Make"],
  marketplace: ["Supabase", "Vercel", "Lovable"],
  app: ["Lovable", "Supabase", "Vercel"],
};

// Build links between same-category nodes
function buildLinks(nodes: any[]) {
  const links: { source: number; target: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].category === nodes[j].category) {
        links.push({ source: i, target: j });
      }
    }
  }
  return links;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  tool: (typeof TOOLS)[0] | null;
}

export function ToolConstellation({ ideaText }: { ideaText: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<any, any> | null>(null);
  const nodesRef = useRef<any[]>([]);
  const linesRef = useRef<any>(null);
  const initializedRef = useRef(false);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false, x: 0, y: 0, tool: null,
  });

  const initSimulation = (width: number) => {
    if (!svgRef.current || initializedRef.current) return;
    initializedRef.current = true;

    const height = 380;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const nodes = TOOLS.map((t) => ({
      ...t,
      x: width / 2 + (Math.random() - 0.5) * 80,
      y: height / 2 + (Math.random() - 0.5) * 80,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    nodesRef.current = nodes;
    const links = buildLinks(nodes);

    // Draw lines layer first (behind nodes)
    const lineGroup = svg.append("g").attr("class", "lines");
    const lineElements = lineGroup.selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", (d) => CATEGORY_COLORS[nodes[d.source as number].category])
      .attr("stroke-width", 0.8)
      .attr("stroke-opacity", 0.2);

    linesRef.current = lineElements;

    const simulation = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-55))
      .force("center", d3.forceCenter(width / 2, height / 2).strength(0.05))
      .force("collision", d3.forceCollide(34))
      .force("x", d3.forceX(width / 2).strength(0.04))
      .force("y", d3.forceY(height / 2).strength(0.04))
      .alphaDecay(0)
      .velocityDecay(0.6);

    simulationRef.current = simulation;

    // Add gentle random wiggle every few ticks
    let tickCount = 0;
    simulation.on("tick", () => {
      tickCount++;

      // Apply gentle random nudge every 120 ticks
      if (tickCount % 10 === 0) {
        nodes.forEach((d: any) => {
          d.vx += (Math.random() - 0.5) * 1.2;
          d.vy += (Math.random() - 0.5) * 1.2;
        });
      }

      // Clamp within bounds
      nodes.forEach((d: any) => {
        d.x = Math.max(36, Math.min(width - 36, d.x));
        d.y = Math.max(36, Math.min(height - 36, d.y));
      });

      // Update node positions
      nodeGroups.attr("transform", (d: any) => `translate(${d.x},${d.y})`);

      // Update line positions
      lineElements
        .attr("x1", (d: any) => nodes[d.source].x)
        .attr("y1", (d: any) => nodes[d.source].y)
        .attr("x2", (d: any) => nodes[d.target].x)
        .attr("y2", (d: any) => nodes[d.target].y);
    });

    // Draw nodes layer on top
    const g = svg.append("g");
    const nodeGroups = g.selectAll("g.node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .style("cursor", "pointer");

    nodeGroups.append("circle")
      .attr("r", 28)
      .attr("fill", (d) => CATEGORY_COLORS[d.category] + "33")
      .attr("stroke", (d) => CATEGORY_COLORS[d.category])
      .attr("stroke-width", 1.5)
      .style("opacity", 0.55);

    nodeGroups.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", "9px")
      .attr("font-family", "Inter, sans-serif")
      .attr("fill", "#0F172A")
      .attr("font-weight", "500")
      .attr("pointer-events", "none")
      .text((d) => d.id.length > 10 ? d.id.slice(0, 9) + "…" : d.id);

    nodeGroups
      .on("mouseover", function (event, d) {
        const rect = svgRef.current!.getBoundingClientRect();
        setTooltip({ visible: true, x: event.clientX - rect.left, y: event.clientY - rect.top - 10, tool: d });
      })
      .on("mousemove", function (event) {
        const rect = svgRef.current!.getBoundingClientRect();
        setTooltip((prev) => ({ ...prev, x: event.clientX - rect.left, y: event.clientY - rect.top - 10 }));
      })
      .on("mouseleave", function () {
        setTooltip((prev) => ({ ...prev, visible: false }));
      });
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width && width > 0) initSimulation(width);
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (simulationRef.current) simulationRef.current.stop();
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    const lower = ideaText.toLowerCase();
    const matched = new Set<string>();

    if (lower.trim().length > 0) {
      Object.entries(KEYWORD_MAP).forEach(([keyword, tools]) => {
        if (lower.includes(keyword)) tools.forEach((t) => matched.add(t));
      });
    }

    const svg = d3.select(svgRef.current);
    const hasMatches = matched.size > 0;

    svg.selectAll<SVGGElement, any>("g.node").each(function (d) {
      const circle = d3.select(this).select("circle");
      const isMatch = matched.has(d.id);

      if (!hasMatches) {
        circle.style("opacity", "0.55").attr("filter", null).attr("r", 28);
      } else if (isMatch) {
        circle.style("opacity", "1").attr("filter", "drop-shadow(0 0 10px #D97706)").attr("r", 32);
      } else {
        circle.style("opacity", "0.12").attr("filter", null).attr("r", 28);
      }
    });

    // Also highlight lines for matched nodes
    if (linesRef.current) {
      linesRef.current.attr("stroke-opacity", (d: any) => {
        const nodes = nodesRef.current;
        const sourceMatch = matched.has(nodes[d.source]?.id);
        const targetMatch = matched.has(nodes[d.target]?.id);
        if (!hasMatches) return 0.2;
        if (sourceMatch && targetMatch) return 0.6;
        return 0.05;
      });
    }
  }, [ideaText]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: 380 }}>
      <svg ref={svgRef} width="100%" height="380" className="w-full" />
      {tooltip.visible && tooltip.tool && (
        <div
          className="absolute z-50 pointer-events-none px-3 py-2 rounded-lg shadow-lg text-left"
          style={{ left: tooltip.x + 12, top: tooltip.y, background: "#0F172A", maxWidth: 200 }}
        >
          <div className="text-white text-xs font-semibold">{tooltip.tool.id}</div>
          <div className="text-xs mt-0.5" style={{ color: "#D97706" }}>{tooltip.tool.category}</div>
          <div className="text-stone-400 text-xs mt-1">{tooltip.tool.desc}</div>
        </div>
      )}
    </div>
  );
}