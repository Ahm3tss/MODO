"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/UI/PremiumButton";
import { content } from "@/lib/content";

const c = content.home.processSteps;

export function ProcessSteps() {
    return (
        <section className="py-24 md:py-32 relative border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.sectionLabel}</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">{c.heading}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-0 relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                    {c.steps.map((step, index) => (
                        <div key={step.number} className="relative text-center px-8 py-10">
                            {/* Step Number Ghost */}
                            <div className="text-[120px] font-black text-white/[0.03] absolute top-0 left-1/2 -translate-x-1/2 leading-none select-none">{step.number}</div>

                            {/* Step Dot */}
                            <div className="relative z-10 w-12 h-12 rounded-full border-2 border-accent/50 flex items-center justify-center mx-auto mb-6 bg-[#020410]">
                                <span className="text-accent font-mono text-sm">{step.number}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-300 text-sm max-w-xs mx-auto">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <PremiumButton href="/contact">
                        Start Your Journey
                    </PremiumButton>
                </div>
            </div>
        </section>
    );
}
