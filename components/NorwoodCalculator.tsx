"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@/components/UI/PremiumButton";
import { content } from "@/lib/content";

const c = content.home.norwood;

export function NorwoodCalculator() {
    const [stage, setStage] = useState(3);
    const currentStage = c.stages[stage - 1];

    return (
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">{c.heading}</h2>
                <p className="text-xl text-slate-500 font-mono uppercase tracking-widest">{c.subtitle}</p>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 md:p-12">
                {/* Slider */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">{c.currentScaleLabel}</span>
                        <span className="text-accent font-bold text-lg">{c.norwoodPrefix} {stage}</span>
                    </div>
                    <input
                        type="range"
                        min={1}
                        max={7}
                        value={stage}
                        onChange={(e) => setStage(Number(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between mt-2 text-xs text-slate-600">
                        {c.scaleLabels.map((label) => (
                            <span key={label}>{label}</span>
                        ))}
                    </div>
                </div>

                {/* Result */}
                <div className="border-t border-white/10 pt-8 space-y-6">
                    <div>
                        <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">{c.recommendationLabel}</span>
                        <p className="text-slate-300 text-lg">{currentStage.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">{c.graftsNeededLabel}</span>
                            <div className="text-4xl font-black text-white">{currentStage.grafts}</div>
                        </div>
                        <PremiumButton href="/contact">
                            {c.startAnalysisPrefix} {stage}
                        </PremiumButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
