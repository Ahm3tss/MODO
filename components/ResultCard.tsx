"use client";
import React from "react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FadeIn } from "@/components/FadeIn";

interface ResultCardProps {
    patientId: string;
    beforeImage: string;
    afterImage: string;
    grafts: number;
    norwood: number;
    technique: string;
    age: number;
    tags: string[];
    onExpand?: () => void;
    index?: number;
}

export function ResultCard({
    patientId,
    beforeImage,
    afterImage,
    grafts,
    norwood,
    technique,
    age,
    tags,
    onExpand,
    index = 0
}: ResultCardProps) {
    return (
        <FadeIn
            className="bg-white/[0.02] rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-accent/20 transition-all duration-300 group"
            delay={index * 0.1}
        >
            {/* Slider Area */}
            <div className="aspect-[4/3] relative">
                <BeforeAfterSlider
                    beforeImage={beforeImage}
                    afterImage={afterImage}
                />

                {/* Expand Button */}
                {onExpand && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onExpand();
                        }}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-accent hover:border-accent transition-all duration-300 z-20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-2"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></svg>
                    </button>
                )}
            </div>

            {/* Data Panel */}
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="text-xs font-bold text-accent uppercase tracking-wider">Patient ID: {patientId}</div>
                        <h3 className="font-heading font-black text-xl text-white">{grafts.toLocaleString()} Grafts</h3>
                    </div>
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-slate-300 uppercase">
                        {technique}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10 border-b">
                    <div>
                        <span className="text-xs text-muted-foreground uppercase block mb-1">Scale</span>
                        <span className="font-bold text-white">Norwood {norwood}</span>
                    </div>
                    <div>
                        <span className="text-xs text-muted-foreground uppercase block mb-1">Age</span>
                        <span className="font-bold text-white">{age} Years</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}
