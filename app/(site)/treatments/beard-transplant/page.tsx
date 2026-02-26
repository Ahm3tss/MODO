"use client";

import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { SchemaFAQ } from "@/components/SchemaFAQ";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeatureSplit } from "@/components/FeatureSplit";
import { SEOContent } from "@/components/SEOContent";
import { Sparkles, User, Scissors, Clock, CheckCircle2 } from "lucide-react";
import { content } from "@/lib/content";

const c = content.treatments.beardTransplant;
const candidateIcons = [User, Scissors, Clock, CheckCircle2];

export default function BeardTransplant() {
    return (
        <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

            {/* 1. HERO */}
            <section className="min-h-[80vh] flex items-center justify-center relative border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image src={c.hero.image} alt="Beard Transplant" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-[#020410]/50" />
                </div>
                <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs tracking-widest uppercase">
                        <Sparkles className="w-3 h-3" /><span>{c.hero.badge}</span>
                    </div>
                    <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        {c.hero.heading.split("\n").map((line, i) => (
                            <span key={i}>{line}{i === 0 && <br />}</span>
                        ))}
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">{c.hero.subtitle}</p>
                    <Breadcrumbs className="justify-center" />
                </div>
            </section>

            {/* 2. SEO CONTENT */}
            <SEOContent title={c.seoContent.title}>
                {c.seoContent.paragraphs.map((p, i) => (
                    <p key={i} className={i < c.seoContent.paragraphs.length - 1 ? "mb-6" : ""}>{p}</p>
                ))}
            </SEOContent>

            {/* 3. IDEAL CANDIDATES */}
            <section className="py-24 md:py-32 border-b border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3 md:sticky md:top-32">
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.candidates.label}</span>
                            <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                                {c.candidates.heading.split("\n").map((line, i) => (
                                    <span key={i}>{line}{i === 0 && <br />}</span>
                                ))}
                            </h2>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {c.candidates.items.map((item, i) => {
                                const Icon = candidateIcons[i];
                                return (
                                    <div key={item.title} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8">
                                        <Icon className="w-8 h-8 text-accent mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                        <p className="text-slate-300">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FEATURE SPLIT */}
            <FeatureSplit
                label={c.featureSplit.label}
                title={c.featureSplit.title}
                description={c.featureSplit.description}
                features={c.featureSplit.features}
                image={c.featureSplit.image}
                imageAlt={c.featureSplit.imageAlt}
                imagePosition={c.featureSplit.imagePosition}
            />

            {/* 5. FAQ */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.faq.label}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">{c.faq.heading}</h2>
                    </div>
                    <FAQ items={c.faq.items} />
                    <SchemaFAQ data={c.faq.schema} />
                </div>
            </section>

            {/* 6. CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <CallToAction title={c.cta.title} description={c.cta.description} buttonText={c.cta.buttonText} />
                </div>
            </section>
        </div>
    );
}
