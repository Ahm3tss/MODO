"use client";

import { useState } from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ResultCard } from "../../components/ResultCard";
import { ResultLightbox } from "../../components/ResultLightbox";
import { FadeIn } from "@/components/FadeIn";
import { content } from "@/lib/content";

const c = content.results;

export default function Results() {
    const [selectedTechnique, setSelectedTechnique] = useState<string>("all");
    const [selectedResult, setSelectedResult] = useState<typeof c.resultCards[0] | null>(null);
    const techniques = ["all", "Robotic DHI", "Sapphire FUE", "DHI Manual"];

    const filteredResults = selectedTechnique === "all" ? c.resultCards : c.resultCards.filter(r => r.technique === selectedTechnique);

    return (
        <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

            <ResultLightbox
                isOpen={!!selectedResult}
                onClose={() => setSelectedResult(null)}
                beforeImage={selectedResult?.beforeImage || ""}
                afterImage={selectedResult?.afterImage || ""}
                technique={selectedResult?.technique || ""}
                grafts={selectedResult?.grafts || 0}
            />

            {/* HERO */}
            <section className="min-h-[60vh] flex items-center justify-center relative border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" alt="Results" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-[#020410]/50" />
                </div>
                <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
                    <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{c.hero.heading}</h1>
                    <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">{c.hero.subtitle}</p>
                    <Breadcrumbs className="justify-center" />
                </div>
            </section>

            {/* FILTER - Editorial Header */}
            <section className="py-16 border-b border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div>
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">{c.filter.label}</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white">{c.filter.heading}</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {techniques.map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => setSelectedTechnique(tech)}
                                    className={`px-4 py-2 rounded-lg font-mono text-sm uppercase tracking-widest transition-all ${selectedTechnique === tech
                                        ? "bg-accent text-white"
                                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {tech === "all" ? "All" : tech}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS GRID - Glassmorphism Cards */}
            <section className="py-24 md:py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResults.map((result, index) => (
                            <ResultCard
                                key={result.id}
                                patientId={`P-${result.id.toString().padStart(3, "0")}`}
                                beforeImage={result.beforeImage}
                                afterImage={result.afterImage}
                                grafts={result.grafts}
                                norwood={result.norwood}
                                technique={result.technique}
                                age={result.age}
                                tags={result.tags}
                                onExpand={() => setSelectedResult(result)}
                                index={index % 3}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS - Editorial List */}
            <section className="py-24 md:py-32 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start mb-16">
                        <div className="md:w-1/3 md:sticky md:top-32">
                            <FadeIn>
                                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.testimonials.label}</span>
                                <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                                    {c.testimonials.heading.split("\n").map((line, i) => (
                                        <span key={i}>{line}{i === 0 && <br />}</span>
                                    ))}
                                </h2>
                            </FadeIn>
                        </div>
                        <div className="md:w-2/3 space-y-8">
                            {c.testimonials.items.map((testimonial, index) => (
                                <FadeIn key={testimonial.name} delay={index * 0.1}>
                                    <div className="border-l border-white/10 pl-8 hover:border-accent transition-colors group">
                                        <Quote className="w-8 h-8 text-white/10 group-hover:text-accent/30 transition-colors mb-4" />
                                        <p className="text-xl text-slate-300 mb-4 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-white">{testimonial.name}</span>
                                            <span className="text-slate-500">{testimonial.country}</span>
                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <CallToAction title={c.cta.title} description={c.cta.description} buttonText={c.cta.buttonText} />
                </div>
            </section>
        </div>
    );
}
