"use client";

import { content } from "@/lib/content";
import { AnimatedCounter } from "./AnimatedCounter";

interface TrustBarStat {
  value: number | string;
  suffix: string;
  label: string;
}

interface TrustBarProps {
  stats?: TrustBarStat[];
}

const fallbackStats = content.home.trustBar.stats;

export function TrustBar({ stats = fallbackStats }: TrustBarProps) {
    return (
        <section className="py-12 border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-white">
                                <AnimatedCounter value={stat.value} />{stat.suffix}
                            </div>
                            <div className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
