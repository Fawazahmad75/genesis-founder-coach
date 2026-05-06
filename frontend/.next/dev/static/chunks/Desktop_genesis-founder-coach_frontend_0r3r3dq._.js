(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/genesis-founder-coach/frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/genesis-founder-coach/frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolConstellation",
    ()=>ToolConstellation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3-force/src/simulation.js [app-client] (ecmascript) <export default as forceSimulation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3-force/src/center.js [app-client] (ecmascript) <export default as forceCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3-force/src/collide.js [app-client] (ecmascript) <export default as forceCollide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceX$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3-force/src/x.js [app-client] (ecmascript) <export default as forceX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceY$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/d3-force/src/y.js [app-client] (ecmascript) <export default as forceY>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TOOLS = [
    {
        id: "Lovable",
        category: "UI",
        desc: "Build full-stack apps with natural language"
    },
    {
        id: "Bolt.new",
        category: "UI",
        desc: "Instant full-stack web app scaffolding"
    },
    {
        id: "v0.dev",
        category: "UI",
        desc: "Generate UI components from prompts"
    },
    {
        id: "Claude Code",
        category: "AI",
        desc: "AI coding assistant in your terminal"
    },
    {
        id: "n8n",
        category: "Automation",
        desc: "Visual automation for AI-heavy workflows"
    },
    {
        id: "Make",
        category: "Automation",
        desc: "No-code automation with advanced logic"
    },
    {
        id: "Zapier",
        category: "Automation",
        desc: "Connect apps with simple automation"
    },
    {
        id: "Supabase",
        category: "Database",
        desc: "Postgres database with real-time + auth"
    },
    {
        id: "Airtable",
        category: "Database",
        desc: "Spreadsheet-style database for non-technical founders"
    },
    {
        id: "Firebase",
        category: "Database",
        desc: "Google's real-time NoSQL database"
    },
    {
        id: "OpenAI API",
        category: "AI",
        desc: "GPT-4o for AI features in your product"
    },
    {
        id: "Anthropic Claude",
        category: "AI",
        desc: "Best-in-class reasoning and instruction-following"
    },
    {
        id: "Groq",
        category: "AI",
        desc: "Ultra-fast LLM inference at low cost"
    },
    {
        id: "Vercel",
        category: "Deployment",
        desc: "One-click deployment for Next.js frontends"
    },
    {
        id: "Railway",
        category: "Deployment",
        desc: "Simple deployment for Python backends"
    },
    {
        id: "Canva AI",
        category: "Design",
        desc: "Design assets without a designer"
    },
    {
        id: "Midjourney",
        category: "Design",
        desc: "AI image generation for product visuals"
    },
    {
        id: "Replit",
        category: "Backend",
        desc: "Browser-based coding environment"
    }
];
const CATEGORY_COLORS = {
    UI: "#D97706",
    AI: "#92400E",
    Automation: "#0F766E",
    Database: "#57534E",
    Deployment: "#374151",
    Design: "#9333EA",
    Backend: "#1D4ED8"
};
const KEYWORD_MAP = {
    lovable: [
        "Lovable"
    ],
    bolt: [
        "Bolt.new"
    ],
    v0: [
        "v0.dev"
    ],
    claude: [
        "Anthropic Claude",
        "Claude Code"
    ],
    n8n: [
        "n8n"
    ],
    make: [
        "Make"
    ],
    zapier: [
        "Zapier"
    ],
    supabase: [
        "Supabase"
    ],
    airtable: [
        "Airtable"
    ],
    firebase: [
        "Firebase"
    ],
    openai: [
        "OpenAI API"
    ],
    groq: [
        "Groq"
    ],
    vercel: [
        "Vercel"
    ],
    railway: [
        "Railway"
    ],
    canva: [
        "Canva AI"
    ],
    midjourney: [
        "Midjourney"
    ],
    replit: [
        "Replit"
    ],
    automation: [
        "n8n",
        "Make",
        "Zapier"
    ],
    database: [
        "Supabase",
        "Airtable",
        "Firebase"
    ],
    ai: [
        "OpenAI API",
        "Anthropic Claude",
        "Groq",
        "Claude Code"
    ],
    deploy: [
        "Vercel",
        "Railway"
    ],
    design: [
        "Canva AI",
        "Midjourney"
    ],
    ui: [
        "Lovable",
        "Bolt.new",
        "v0.dev"
    ],
    "no-code": [
        "Lovable",
        "n8n",
        "Airtable"
    ],
    nocode: [
        "Lovable",
        "n8n",
        "Airtable"
    ],
    backend: [
        "Supabase",
        "Replit",
        "Railway"
    ],
    frontend: [
        "Lovable",
        "Bolt.new",
        "v0.dev",
        "Vercel"
    ],
    restaurant: [
        "n8n",
        "Airtable",
        "OpenAI API"
    ],
    customer: [
        "n8n",
        "OpenAI API",
        "Airtable"
    ],
    support: [
        "n8n",
        "OpenAI API",
        "Make"
    ],
    marketplace: [
        "Supabase",
        "Vercel",
        "Lovable"
    ],
    app: [
        "Lovable",
        "Supabase",
        "Vercel"
    ]
};
// Build links between same-category nodes
function buildLinks(nodes) {
    const links = [];
    for(let i = 0; i < nodes.length; i++){
        for(let j = i + 1; j < nodes.length; j++){
            if (nodes[i].category === nodes[j].category) {
                links.push({
                    source: i,
                    target: j
                });
            }
        }
    }
    return links;
}
function ToolConstellation({ ideaText }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const simulationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        x: 0,
        y: 0,
        tool: null
    });
    const initSimulation = (width)=>{
        if (!svgRef.current || initializedRef.current) return;
        initializedRef.current = true;
        const height = 380;
        const svg = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current);
        svg.selectAll("*").remove();
        const nodes = TOOLS.map((t)=>({
                ...t,
                x: width / 2 + (Math.random() - 0.5) * 80,
                y: height / 2 + (Math.random() - 0.5) * 80,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            }));
        nodesRef.current = nodes;
        const links = buildLinks(nodes);
        // Draw lines layer first (behind nodes)
        const lineGroup = svg.append("g").attr("class", "lines");
        const lineElements = lineGroup.selectAll("line").data(links).enter().append("line").attr("stroke", (d)=>CATEGORY_COLORS[nodes[d.source].category]).attr("stroke-width", 0.8).attr("stroke-opacity", 0.2);
        linesRef.current = lineElements;
        const simulation = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__["forceSimulation"](nodes).force("charge", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"]().strength(-55)).force("center", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__["forceCenter"](width / 2, height / 2).strength(0.05)).force("collision", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"](34)).force("x", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceX$3e$__["forceX"](width / 2).strength(0.04)).force("y", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$force$2f$src$2f$y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceY$3e$__["forceY"](height / 2).strength(0.04)).alphaDecay(0).velocityDecay(0.6);
        simulationRef.current = simulation;
        // Add gentle random wiggle every few ticks
        let tickCount = 0;
        simulation.on("tick", ()=>{
            tickCount++;
            // Apply gentle random nudge every 120 ticks
            if (tickCount % 10 === 0) {
                nodes.forEach((d)=>{
                    d.vx += (Math.random() - 0.5) * 1.2;
                    d.vy += (Math.random() - 0.5) * 1.2;
                });
            }
            // Clamp within bounds
            nodes.forEach((d)=>{
                d.x = Math.max(36, Math.min(width - 36, d.x));
                d.y = Math.max(36, Math.min(height - 36, d.y));
            });
            // Update node positions
            nodeGroups.attr("transform", (d)=>`translate(${d.x},${d.y})`);
            // Update line positions
            lineElements.attr("x1", (d)=>nodes[d.source].x).attr("y1", (d)=>nodes[d.source].y).attr("x2", (d)=>nodes[d.target].x).attr("y2", (d)=>nodes[d.target].y);
        });
        // Draw nodes layer on top
        const g = svg.append("g");
        const nodeGroups = g.selectAll("g.node").data(nodes).enter().append("g").attr("class", "node").style("cursor", "pointer");
        nodeGroups.append("circle").attr("r", 28).attr("fill", (d)=>CATEGORY_COLORS[d.category] + "33").attr("stroke", (d)=>CATEGORY_COLORS[d.category]).attr("stroke-width", 1.5).style("opacity", 0.55);
        nodeGroups.append("text").attr("text-anchor", "middle").attr("dy", "0.35em").attr("font-size", "9px").attr("font-family", "Inter, sans-serif").attr("fill", "#0F172A").attr("font-weight", "500").attr("pointer-events", "none").text((d)=>d.id.length > 10 ? d.id.slice(0, 9) + "…" : d.id);
        nodeGroups.on("mouseover", function(event, d) {
            const rect = svgRef.current.getBoundingClientRect();
            setTooltip({
                visible: true,
                x: event.clientX - rect.left,
                y: event.clientY - rect.top - 10,
                tool: d
            });
        }).on("mousemove", function(event) {
            const rect = svgRef.current.getBoundingClientRect();
            setTooltip((prev)=>({
                    ...prev,
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top - 10
                }));
        }).on("mouseleave", function() {
            setTooltip((prev)=>({
                    ...prev,
                    visible: false
                }));
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToolConstellation.useEffect": ()=>{
            if (!containerRef.current) return;
            const observer = new ResizeObserver({
                "ToolConstellation.useEffect": (entries)=>{
                    const width = entries[0]?.contentRect.width;
                    if (width && width > 0) initSimulation(width);
                }
            }["ToolConstellation.useEffect"]);
            observer.observe(containerRef.current);
            return ({
                "ToolConstellation.useEffect": ()=>{
                    observer.disconnect();
                    if (simulationRef.current) simulationRef.current.stop();
                }
            })["ToolConstellation.useEffect"];
        }
    }["ToolConstellation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToolConstellation.useEffect": ()=>{
            if (!svgRef.current) return;
            const lower = ideaText.toLowerCase();
            const matched = new Set();
            if (lower.trim().length > 0) {
                Object.entries(KEYWORD_MAP).forEach({
                    "ToolConstellation.useEffect": ([keyword, tools])=>{
                        if (lower.includes(keyword)) tools.forEach({
                            "ToolConstellation.useEffect": (t)=>matched.add(t)
                        }["ToolConstellation.useEffect"]);
                    }
                }["ToolConstellation.useEffect"]);
            }
            const svg = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current);
            const hasMatches = matched.size > 0;
            svg.selectAll("g.node").each({
                "ToolConstellation.useEffect": function(d) {
                    const circle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](this).select("circle");
                    const isMatch = matched.has(d.id);
                    if (!hasMatches) {
                        circle.style("opacity", "0.55").attr("filter", null).attr("r", 28);
                    } else if (isMatch) {
                        circle.style("opacity", "1").attr("filter", "drop-shadow(0 0 10px #D97706)").attr("r", 32);
                    } else {
                        circle.style("opacity", "0.12").attr("filter", null).attr("r", 28);
                    }
                }
            }["ToolConstellation.useEffect"]);
            // Also highlight lines for matched nodes
            if (linesRef.current) {
                linesRef.current.attr("stroke-opacity", {
                    "ToolConstellation.useEffect": (d)=>{
                        const nodes = nodesRef.current;
                        const sourceMatch = matched.has(nodes[d.source]?.id);
                        const targetMatch = matched.has(nodes[d.target]?.id);
                        if (!hasMatches) return 0.2;
                        if (sourceMatch && targetMatch) return 0.6;
                        return 0.05;
                    }
                }["ToolConstellation.useEffect"]);
            }
        }
    }["ToolConstellation.useEffect"], [
        ideaText
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full",
        style: {
            height: 380
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                width: "100%",
                height: "380",
                className: "w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            tooltip.visible && tooltip.tool && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-50 pointer-events-none px-3 py-2 rounded-lg shadow-lg text-left",
                style: {
                    left: tooltip.x + 12,
                    top: tooltip.y,
                    background: "#0F172A",
                    maxWidth: 200
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-xs font-semibold",
                        children: tooltip.tool.id
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs mt-0.5",
                        style: {
                            color: "#D97706"
                        },
                        children: tooltip.tool.category
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-stone-400 text-xs mt-1",
                        children: tooltip.tool.desc
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
_s(ToolConstellation, "5aDebZ2sOcKv7XKzpxvtDAmBTlo=");
_c = ToolConstellation;
var _c;
__turbopack_context__.k.register(_c, "ToolConstellation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ToolConstellation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/components/ToolConstellation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PulseBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex h-2 w-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-flex rounded-full h-2 w-2 bg-amber-500"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-amber-700 font-medium",
                children: "Powered by Claude AI"
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = PulseBadge;
function HeroSection() {
    _s();
    const [idea, setIdea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center px-6 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PulseBadge, {}, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] text-balance",
                            children: [
                                "Stop Guessing.",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-600",
                                    children: "Start Building."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-lg sm:text-xl text-stone-600 max-w-xl leading-relaxed",
                            children: "Describe your startup idea. Our AI agents analyze it and hand you a complete tool stack, week 1 sprint plan, and copy-paste prompts — in 60 seconds."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 w-full max-w-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: idea,
                                    onChange: (e)=>setIdea(e.target.value),
                                    placeholder: "An AI tool that helps restaurants automate customer support...",
                                    rows: 3,
                                    className: "w-full p-4 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm text-base"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-stone-400 mt-1 mb-4",
                                    children: idea.trim().length < 30 ? `${30 - idea.trim().length} more characters needed` : "✓ Ready to go"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            className: "bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/coach${idea.trim().length >= 30 ? `?idea=${encodeURIComponent(idea)}` : ""}`,
                                                children: [
                                                    "Start Building",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ml-2 h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "outline",
                                            size: "lg",
                                            className: "border-stone-300 bg-transparent hover:bg-stone-100 px-8 py-6 text-lg text-stone-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#how-it-works",
                                                children: "How It Works"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex flex-col items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ToolConstellation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolConstellation"], {
                            ideaText: idea
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-12 px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl font-bold text-amber-600",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-[#0F172A] mt-1",
                                            children: "AI Agents"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-stone-500",
                                            children: "analyzing your idea in sequence"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl font-bold text-amber-600",
                                            children: [
                                                "8.0",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl text-stone-400",
                                                    children: "/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-[#0F172A] mt-1",
                                            children: "Plan Quality"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-stone-500",
                                            children: "average eval score"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "L2lfQu1JMRk8CLXdVlk3GKW3zqA=");
_c1 = HeroSection;
function FeatureCard({ icon: Icon, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-6 w-6 text-amber-600"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-stone-900 mb-3",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-stone-600 leading-relaxed",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c2 = FeatureCard;
function FeaturesSection() {
    const features = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
            title: "Multi-Agent Analysis",
            description: "3 specialized AI agents analyze your idea from every angle — technology, business, and execution."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            title: "Actionable Sprint Plan",
            description: "Day-by-day tasks calibrated to your technical level. Know exactly what to do from day one."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"],
            title: "Copy-Paste Prompts",
            description: "Ready-to-use prompts for every tool in your stack. Just copy, paste, and execute."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-4 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold text-stone-900 mb-4",
                            children: [
                                "Everything You Need to",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-600",
                                    children: "Ship Fast"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-600 text-lg max-w-2xl mx-auto",
                            children: "Our AI agents work together to give you a complete, actionable plan"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-6",
                    children: features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                            ...feature
                        }, feature.title, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c3 = FeaturesSection;
function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Describe your idea",
            description: "Tell us what you're building in plain English. No technical jargon needed."
        },
        {
            number: "02",
            title: "Answer 4 quick questions",
            description: "Help us understand your context — technical level, timeline, and goals."
        },
        {
            number: "03",
            title: "Get your complete build plan",
            description: "Receive your personalized tool stack, sprint plan, and prompts instantly."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        className: "py-24 px-4 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold text-stone-900 mb-4",
                            children: "How It Works"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-600 text-lg",
                            children: "From idea to action plan in 3 simple steps"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-amber-500 via-amber-300 to-amber-100 hidden md:block"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-12",
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-amber-500 shadow-sm flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-600 font-bold text-lg",
                                                children: step.number
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-3",
                                            style: {
                                                animationDelay: `${index * 100}ms`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-stone-900 mb-2",
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-stone-600 leading-relaxed",
                                                    children: step.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.number, true, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c4 = HowItWorksSection;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-12 px-4 border-t border-stone-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-5 w-5 text-amber-600"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-stone-900",
                            children: "Founder Build Coach"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-stone-500 text-sm",
                    children: "Built for Genesis founders. Powered by Claude."
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c5 = Footer;
function LandingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        style: {
            backgroundColor: "#F5F4F0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturesSection, {}, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HowItWorksSection, {}, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/page.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_c6 = LandingPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "PulseBadge");
__turbopack_context__.k.register(_c1, "HeroSection");
__turbopack_context__.k.register(_c2, "FeatureCard");
__turbopack_context__.k.register(_c3, "FeaturesSection");
__turbopack_context__.k.register(_c4, "HowItWorksSection");
__turbopack_context__.k.register(_c5, "Footer");
__turbopack_context__.k.register(_c6, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_genesis-founder-coach_frontend_0r3r3dq._.js.map