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
"[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Sidebar({ step, idea, setIdea, questions, answers, onAnswerChange, onAnalyzeIdea, onGeneratePlan, isLoadingQuestions, isGeneratingPlan, planDone, onStartOver }) {
    const placeholders = [
        "A marketplace for local farmers to sell directly to restaurants...",
        "An AI tool that helps freelancers write better proposals...",
        "A mobile app that gamifies personal finance for Gen Z..."
    ];
    const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-full lg:w-[35%] bg-white border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8 flex flex-col min-h-[40vh] lg:min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "h-5 w-5 text-teal-600"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-stone-900",
                        children: "Founder Build Coach"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 px-2 py-0.5 text-xs bg-teal-50 text-teal-700 rounded-full border border-teal-200",
                        children: "AI"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${step >= 1 ? "bg-teal-600 text-white" : "bg-stone-100 text-stone-500"}`,
                        children: "1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-px bg-stone-200"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${step >= 2 ? "bg-teal-600 text-white" : "bg-stone-100 text-stone-500"}`,
                        children: "2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: step === 1 ? "block" : "hidden lg:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-stone-900 mb-2",
                                children: "What are you building?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: idea,
                                onChange: (e)=>setIdea(e.target.value),
                                placeholder: randomPlaceholder,
                                className: "w-full h-32 lg:h-40 p-4 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm",
                                disabled: step === 2
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-stone-400 mt-1",
                                children: idea.trim().length < 30 ? `${30 - idea.trim().length} more characters needed` : "✓ Ready to analyze"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onAnalyzeIdea,
                                disabled: idea.trim().length < 30 || isLoadingQuestions,
                                className: "w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white",
                                children: isLoadingQuestions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        "Analyzing..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Analyze My Idea",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    step === 2 && questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 lg:mt-8 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-stone-500 mb-4",
                                children: "Answer a few questions to personalize your plan:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            questions.map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-stone-900 mb-2",
                                            children: question.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        question.type === "select" && question.options ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: answers[question.id] || "",
                                            onChange: (e)=>onAnswerChange(question.id, e.target.value),
                                            disabled: planDone || isGeneratingPlan,
                                            className: "w-full p-3 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select an option"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this),
                                                question.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option,
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: answers[question.id] || "",
                                            onChange: (e)=>onAnswerChange(question.id, e.target.value),
                                            placeholder: question.placeholder,
                                            disabled: planDone || isGeneratingPlan,
                                            className: "w-full p-3 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, question.id, true, {
                                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)),
                            !planDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onGeneratePlan,
                                disabled: isGeneratingPlan,
                                className: "w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white",
                                children: isGeneratingPlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                            lineNumber: 162,
                                            columnNumber: 21
                                        }, this),
                                        "Generating..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Generate My Plan",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                            lineNumber: 168,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this),
                            planDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStartOver,
                                className: "w-full mt-6 py-3 text-sm text-stone-500 hover:text-stone-900 border border-stone-200 rounded-lg transition-colors flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    "Start Over"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContent",
    ()=>MainContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
function DotBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none",
        style: {
            backgroundImage: "radial-gradient(circle, #0F172A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.06
        }
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = DotBackground;
function EmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 mx-auto mb-6 rounded-full bg-amber-50 flex items-center justify-center animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "h-8 w-8 text-amber-600"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-stone-600",
                    children: "Your build plan will appear here"
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-stone-400 mt-2",
                    children: "Start by describing your idea in the sidebar"
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c1 = EmptyState;
function ErrorState({ message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-8 w-8 text-red-500"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-stone-900 mb-2",
                    children: "Something went wrong"
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-stone-500 mb-6",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onRetry,
                    variant: "outline",
                    className: "gap-2 border-stone-300 text-stone-700 hover:bg-stone-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        "Try Again"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c2 = ErrorState;
function TerminalAgentPanel({ agent, index }) {
    const isDone = agent.status === "done";
    const isEval = agent.name === "Plan Evaluator";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl overflow-hidden",
        style: {
            border: `1.5px solid ${isDone ? "#16A34A" : isEval ? "#D97706" : "#D97706"}`,
            opacity: 1,
            transform: "translateY(0)",
            animation: `slideUp 0.4s ease ${index * 0.15}s both`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 flex items-center justify-between",
                style: {
                    background: "#0F172A"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-red-500 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-yellow-500 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-green-500 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-mono text-stone-300 ml-1",
                                children: agent.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-green-500/20 text-green-400 rounded-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            "Done"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-amber-500/20 text-amber-400 rounded-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            "Thinking..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative p-4 font-mono text-xs leading-relaxed overflow-y-auto max-h-44",
                style: {
                    background: "#1E293B",
                    color: "#CBD5E1"
                },
                children: [
                    !isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
                            animation: "scanline 8s linear infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-400 mr-2",
                        children: "$"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    agent.content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: agent.content
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-stone-500",
                        children: "initializing..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    !isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-2 h-4 bg-amber-400 ml-1 align-middle",
                        style: {
                            animation: "blink 1s step-end infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c3 = TerminalAgentPanel;
function AgentsView({ agents }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 p-6 lg:p-8 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-stone-900 mb-6",
                children: "Analyzing your idea..."
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: agents.map((agent, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TerminalAgentPanel, {
                        agent: agent,
                        index: index
                    }, agent.name, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c4 = AgentsView;
function AnimatedScore({ value }) {
    _s();
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedScore.useEffect": ()=>{
            const duration = 1500;
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            let step = 0;
            const timer = setInterval({
                "AnimatedScore.useEffect.timer": ()=>{
                    step++;
                    current = Math.min(current + increment, value);
                    setDisplayed(current);
                    if (step >= steps) clearInterval(timer);
                }
            }["AnimatedScore.useEffect.timer"], duration / steps);
            return ({
                "AnimatedScore.useEffect": ()=>clearInterval(timer)
            })["AnimatedScore.useEffect"];
        }
    }["AnimatedScore.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: displayed.toFixed(1)
    }, void 0, false);
}
_s(AnimatedScore, "lciTJYebJfyRGrKYgnvMQD6H9go=");
_c5 = AnimatedScore;
function AnimatedBar({ value, delay }) {
    _s1();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedBar.useEffect": ()=>{
            const timer = setTimeout({
                "AnimatedBar.useEffect.timer": ()=>setWidth(value * 10)
            }["AnimatedBar.useEffect.timer"], delay);
            return ({
                "AnimatedBar.useEffect": ()=>clearTimeout(timer)
            })["AnimatedBar.useEffect"];
        }
    }["AnimatedBar.useEffect"], [
        value,
        delay
    ]);
    const getColor = (v)=>{
        if (v >= 8) return "#16A34A";
        if (v >= 6) return "#D97706";
        return "#DC2626";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-2 bg-stone-100 rounded-full overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full",
            style: {
                width: `${width}%`,
                backgroundColor: getColor(value),
                transition: "width 0.8s ease-out"
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_s1(AnimatedBar, "4/nr7/glcmtQpNPa3y1HsyGlpKw=");
_c6 = AnimatedBar;
function ScoreCard({ score }) {
    const getScoreColor = (value)=>{
        if (value >= 8) return "#16A34A";
        if (value >= 6) return "#D97706";
        return "#DC2626";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 rounded-xl bg-white border border-stone-200 shadow-sm mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-stone-900",
                        children: "Plan Quality Score"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl font-bold",
                        style: {
                            color: getScoreColor(score.overall)
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedScore, {
                                value: score.overall
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            "/10"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                children: Object.entries(score.dimensions).map(([key, value], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-stone-500 capitalize",
                                        children: key.replace("_", " ")
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-stone-900",
                                        children: value.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedBar, {
                                value: value,
                                delay: i * 100 + 200
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_c7 = ScoreCard;
function ToolStackTab({ tools }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid sm:grid-cols-2 gap-4",
        children: tools.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-lg bg-white border border-stone-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block px-2 py-0.5 text-xs bg-amber-50 text-amber-700 rounded mb-2",
                        children: tool.layer
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-stone-900",
                        children: tool.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-stone-500 mt-1",
                        children: tool.reason
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_c8 = ToolStackTab;
function SprintTab({ sprint }) {
    _s2();
    const [openDay, setOpenDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: sprint.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-white border border-stone-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpenDay(openDay === day.day ? null : day.day),
                        className: "w-full p-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-stone-900",
                                        children: [
                                            "Day ",
                                            day.day
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 text-xs bg-amber-50 text-amber-700 rounded",
                                        children: day.theme
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-stone-400",
                                children: openDay === day.day ? "−" : "+"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    openDay === day.day && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-4 space-y-2",
                        children: day.tasks.map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-start gap-3 p-2 rounded hover:bg-stone-50 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "mt-0.5 h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 286,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-stone-700",
                                        children: task.task
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 290,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 282,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 280,
                        columnNumber: 13
                    }, this)
                ]
            }, day.day, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 263,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s2(SprintTab, "nBy2DJwl4O16qjyZDAwY2buVSs8=");
_c9 = SprintTab;
function PromptsTab({ prompts }) {
    _s3();
    const [copiedIndex, setCopiedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCopy = async (text, index)=>{
        await navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(()=>setCopiedIndex(null), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: prompts.map((prompt, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-white border border-stone-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-stone-200 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-stone-900",
                                        children: prompt.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-stone-500",
                                        children: [
                                            "For: ",
                                            prompt.tool
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>handleCopy(prompt.prompt, index),
                                className: "gap-2 text-stone-600 hover:text-stone-900",
                                children: copiedIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-4 w-4 text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-500",
                                            children: "Copied!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                            lineNumber: 335,
                                            columnNumber: 19
                                        }, this),
                                        "Copy"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "p-4 text-sm text-stone-700 whitespace-pre-wrap font-mono bg-stone-50",
                        children: prompt.prompt
                    }, void 0, false, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 311,
        columnNumber: 5
    }, this);
}
_s3(PromptsTab, "vmguM15Tqrzn4pZ8KoXNjtu9s9w=");
_c10 = PromptsTab;
function ResultsView({ planResult }) {
    _s4();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tools");
    const tabs = [
        {
            id: "tools",
            label: "Tool Stack"
        },
        {
            id: "sprint",
            label: "Week 1 Sprint"
        },
        {
            id: "prompts",
            label: "Copy-paste Prompts"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 p-6 lg:p-8 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreCard, {
                score: planResult.score
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6 border-b border-stone-200",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === tab.id ? "text-amber-600" : "text-stone-500 hover:text-stone-900"}`,
                        children: [
                            tab.label,
                            activeTab === tab.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                                lineNumber: 374,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            activeTab === "tools" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolStackTab, {
                tools: planResult.toolStack
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 379,
                columnNumber: 33
            }, this),
            activeTab === "sprint" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SprintTab, {
                sprint: planResult.sprint
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 380,
                columnNumber: 34
            }, this),
            activeTab === "prompts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptsTab, {
                prompts: planResult.prompts
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 381,
                columnNumber: 35
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
_s4(ResultsView, "xJI1KF7QPXKTLzrYyzyklLYlIVE=");
_c11 = ResultsView;
function MainContent({ agents, planResult, isGeneratingPlan, error, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex-1 relative flex flex-col min-h-[60vh] lg:min-h-screen",
        style: {
            backgroundColor: "#F5F4F0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DotBackground, {}, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex-1 flex flex-col",
                children: error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorState, {
                    message: error,
                    onRetry: onRetry
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 415,
                    columnNumber: 11
                }, this) : planResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultsView, {
                    planResult: planResult
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 417,
                    columnNumber: 11
                }, this) : agents.length > 0 || isGeneratingPlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentsView, {
                    agents: agents
                }, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {}, void 0, false, {
                    fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
_c12 = MainContent;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "DotBackground");
__turbopack_context__.k.register(_c1, "EmptyState");
__turbopack_context__.k.register(_c2, "ErrorState");
__turbopack_context__.k.register(_c3, "TerminalAgentPanel");
__turbopack_context__.k.register(_c4, "AgentsView");
__turbopack_context__.k.register(_c5, "AnimatedScore");
__turbopack_context__.k.register(_c6, "AnimatedBar");
__turbopack_context__.k.register(_c7, "ScoreCard");
__turbopack_context__.k.register(_c8, "ToolStackTab");
__turbopack_context__.k.register(_c9, "SprintTab");
__turbopack_context__.k.register(_c10, "PromptsTab");
__turbopack_context__.k.register(_c11, "ResultsView");
__turbopack_context__.k.register(_c12, "MainContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/genesis-founder-coach/frontend/app/coach/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoachPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$coach$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/components/coach/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$coach$2f$main$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/genesis-founder-coach/frontend/components/coach/main-content.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const API_BASE = "https://genesis-founder-coach-production.up.railway.app";
function transformPlanResult(data) {
    return {
        score: {
            overall: data.eval?.overall_score || 0,
            dimensions: {
                specificity: data.eval?.scores?.specificity?.score || 0,
                realism: data.eval?.scores?.realism?.score || 0,
                tool_fit: data.eval?.scores?.tool_fit?.score || 0,
                completeness: data.eval?.scores?.completeness?.score || 0
            }
        },
        toolStack: (data.stack?.stack || []).map((item)=>({
                layer: item.layer,
                name: item.tool,
                reason: item.reason
            })),
        sprint: (data.sprint?.sprint || []).map((day)=>({
                day: day.day,
                theme: day.theme,
                tasks: (day.tasks || []).map((t)=>({
                        task: t
                    }))
            })),
        prompts: (data.prompts?.prompts || []).map((p)=>({
                title: p.layer,
                tool: p.tool,
                prompt: p.prompt
            }))
    };
}
function CoachPage() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [idea, setIdea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoadingQuestions, setIsLoadingQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeneratingPlan, setIsGeneratingPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [planResult, setPlanResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleAnalyzeIdea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CoachPage.useCallback[handleAnalyzeIdea]": async ()=>{
            if (!idea.trim()) return;
            setIsLoadingQuestions(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE}/coach/start`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        idea
                    })
                });
                if (!response.ok) throw new Error("Failed to analyze idea");
                const data = await response.json();
                setQuestions(data.questions || []);
                setStep(2);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong");
            } finally{
                setIsLoadingQuestions(false);
            }
        }
    }["CoachPage.useCallback[handleAnalyzeIdea]"], [
        idea
    ]);
    const handleSSEEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CoachPage.useCallback[handleSSEEvent]": (eventType, data)=>{
            switch(eventType){
                case "agent_start":
                    setAgents({
                        "CoachPage.useCallback[handleSSEEvent]": (prev)=>[
                                ...prev,
                                {
                                    name: data.name || "",
                                    status: "thinking",
                                    content: ""
                                }
                            ]
                    }["CoachPage.useCallback[handleSSEEvent]"]);
                    break;
                case "token":
                    setAgents({
                        "CoachPage.useCallback[handleSSEEvent]": (prev)=>{
                            const updated = [
                                ...prev
                            ];
                            const lastAgent = updated[updated.length - 1];
                            if (lastAgent) lastAgent.content += data.token || "";
                            return updated;
                        }
                    }["CoachPage.useCallback[handleSSEEvent]"]);
                    break;
                case "agent_done":
                    setAgents({
                        "CoachPage.useCallback[handleSSEEvent]": (prev)=>{
                            const updated = [
                                ...prev
                            ];
                            const thinkingAgent = updated.find({
                                "CoachPage.useCallback[handleSSEEvent].thinkingAgent": (a)=>a.status === "thinking"
                            }["CoachPage.useCallback[handleSSEEvent].thinkingAgent"]);
                            if (thinkingAgent) thinkingAgent.status = "done";
                            return updated;
                        }
                    }["CoachPage.useCallback[handleSSEEvent]"]);
                    break;
                case "complete":
                    if (data) setPlanResult(transformPlanResult(data));
                    break;
            }
        }
    }["CoachPage.useCallback[handleSSEEvent]"], []);
    const handleGeneratePlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CoachPage.useCallback[handleGeneratePlan]": async ()=>{
            if (isGeneratingPlan || planResult) return;
            setIsGeneratingPlan(true);
            setError(null);
            setPlanResult(null);
            setAgents([]);
            try {
                const response = await fetch(`${API_BASE}/coach/plan`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        idea,
                        target_user: answers["target_user"] || "",
                        technical_comfort: answers["technical_comfort"] || "",
                        budget: answers["budget"] || "",
                        timeline: answers["timeline"] || "",
                        integrations: answers["integrations"] || ""
                    })
                });
                if (!response.ok) throw new Error("Failed to generate plan");
                const reader = response.body?.getReader();
                if (!reader) throw new Error("No response body");
                const decoder = new TextDecoder();
                let buffer = "";
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    buffer += decoder.decode(value, {
                        stream: true
                    });
                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";
                    let currentEvent = "";
                    for (const line of lines){
                        if (line.startsWith("event: ")) {
                            currentEvent = line.slice(7).trim();
                        } else if (line.startsWith("data: ")) {
                            try {
                                const data = JSON.parse(line.slice(6));
                                handleSSEEvent(currentEvent, data);
                                currentEvent = "";
                            } catch  {
                            // skip
                            }
                        }
                    }
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong");
            } finally{
                setIsGeneratingPlan(false);
            }
        }
    }["CoachPage.useCallback[handleGeneratePlan]"], [
        idea,
        answers,
        handleSSEEvent,
        isGeneratingPlan,
        planResult
    ]);
    const handleStartOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CoachPage.useCallback[handleStartOver]": ()=>{
            setStep(1);
            setIdea("");
            setQuestions([]);
            setAnswers({});
            setAgents([]);
            setPlanResult(null);
            setError(null);
        }
    }["CoachPage.useCallback[handleStartOver]"], []);
    const handleRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CoachPage.useCallback[handleRetry]": ()=>{
            setError(null);
            if (step === 1) handleAnalyzeIdea();
            else handleGeneratePlan();
        }
    }["CoachPage.useCallback[handleRetry]"], [
        step,
        handleAnalyzeIdea,
        handleGeneratePlan
    ]);
    const handleAnswerChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CoachPage.useCallback[handleAnswerChange]": (questionId, value)=>{
            setAnswers({
                "CoachPage.useCallback[handleAnswerChange]": (prev)=>({
                        ...prev,
                        [questionId]: value
                    })
            }["CoachPage.useCallback[handleAnswerChange]"]);
        }
    }["CoachPage.useCallback[handleAnswerChange]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white flex flex-col lg:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$coach$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                step: step,
                idea: idea,
                setIdea: setIdea,
                questions: questions,
                answers: answers,
                onAnswerChange: handleAnswerChange,
                onAnalyzeIdea: handleAnalyzeIdea,
                onGeneratePlan: handleGeneratePlan,
                isLoadingQuestions: isLoadingQuestions,
                isGeneratingPlan: isGeneratingPlan,
                planDone: !!planResult,
                onStartOver: handleStartOver
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/coach/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$genesis$2d$founder$2d$coach$2f$frontend$2f$components$2f$coach$2f$main$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainContent"], {
                agents: agents,
                planResult: planResult,
                isGeneratingPlan: isGeneratingPlan,
                error: error,
                onRetry: handleRetry
            }, void 0, false, {
                fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/coach/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/genesis-founder-coach/frontend/app/coach/page.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s(CoachPage, "+0pTMx6IJSUaZN5+6yK+3wCqtrg=");
_c = CoachPage;
var _c;
__turbopack_context__.k.register(_c, "CoachPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_genesis-founder-coach_frontend_0.a_w78._.js.map