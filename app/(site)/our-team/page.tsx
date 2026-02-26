"use client";

import { CallToAction } from "@/components/CallToAction";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Award, ShieldCheck, Microscope } from "lucide-react";
import { content } from "@/lib/content";

const c = content.ourTeam;
const credentialIcons = [Award, ShieldCheck, Microscope];

export default function OurTeam() {
    return (
        <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

            {/* HERO */}
            <section className="min-h-[60vh] flex items-center justify-center relative border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2673&auto=format&fit=crop" alt="Medical Team" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-[#020410]/50" />
                </div>
                <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
                    <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{c.hero.heading}</h1>
                    <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">{c.hero.subtitle}</p>
                    <Breadcrumbs className="justify-center" />
                </div>
            </section>

            {/* TEAM GRID - Glassmorphism Cards */}
            <section className="py-24 md:py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start mb-20">
                        <div className="md:w-1/3">
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.section.label}</span>
                            <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                                {c.section.heading.split("\n").map((line, i) => (
                                    <span key={i}>{line}{i === 0 && <br />}</span>
                                ))}
                            </h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">{c.section.description}</p>
                        </div>
                    </div>

                    {/* Glassmorphism Card Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {c.members.map((member, index) => (
                            <div
                                key={member.name}
                                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020410] to-transparent" />
                                    <div className="absolute top-4 left-4 text-5xl font-black text-white/10">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-accent font-mono text-xs uppercase tracking-widest">{member.role}</span>
                                        <span className="text-slate-600 text-xs">{member.years}+ yrs</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{member.name}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
                                    <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                                        <span className="px-2 py-1 bg-white/5 rounded">{member.specialty}</span>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute -inset-1 bg-accent/5 blur-xl rounded-2xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3 md:sticky md:top-32">
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.credentials.label}</span>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                                {c.credentials.heading.split("\n").map((line, i) => (
                                    <span key={i}>{line}{i === 0 && <br />}</span>
                                ))}
                            </h2>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 gap-8">
                            {c.credentials.items.map((item, i) => {
                                const Icon = credentialIcons[i];
                                return (
                                    <div key={item.title} className={`border-l ${i === 0 ? "border-accent" : "border-white/10 hover:border-accent"} pl-8 group transition-all`}>
                                        <Icon className={`w-8 h-8 ${i === 0 ? "text-accent" : "text-white/50 group-hover:text-accent transition-colors"} mb-4`} />
                                        <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                                        <p className="text-slate-300">{item.description}</p>
                                    </div>
                                );
                            })}
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
