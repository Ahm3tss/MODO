"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { Award, Users, Heart, Globe } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PremiumButton } from "@/components/UI/PremiumButton";
import { content } from "@/lib/content";

const c = content.aboutUs;

interface AboutUsStat {
  value: string;
  label: string;
}

interface AboutUsClientProps {
  stats?: AboutUsStat[];
}

export default function AboutUsClient({ stats: statsProp }: AboutUsClientProps) {
  const stats = statsProp?.length ? statsProp : c.stats;

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" alt="MODO Clinic" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-[#020410]/50" />
        </div>
        <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
          <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{c.hero.heading}</h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">{c.hero.subtitle}</p>
          <Breadcrumbs className="justify-center" />
        </div>
      </section>

      {/* OUR STORY - Editorial */}
      <section className="py-24 md:py-32 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 md:sticky md:top-32">
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.story.label}</span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                  {c.story.heading.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h2>
              </div>
              <div className="md:w-2/3 space-y-8">
                {c.story.paragraphs.map((p, i) => (
                  <p key={i} className={`${i === 0 ? "text-xl" : "text-lg"} text-slate-300 leading-relaxed`}>{p}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUES - Numbered List */}
      <section className="py-24 md:py-32 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 md:sticky md:top-32">
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.values.label}</span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                  {c.values.heading.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h2>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 gap-12">
                {c.values.items.map((item) => (
                  <div key={item.number} className="group border-l border-white/10 pl-8 hover:border-accent transition-colors duration-500">
                    <div className="text-4xl font-black text-white/10 mb-2 group-hover:text-accent transition-colors">{item.number}</div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-300 max-w-md">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS - Glassmorphism */}
      <section className="py-24 md:py-32 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const icons = [Award, Globe, Heart, Users];
                const Icon = icons[i % icons.length];
                return (
                  <div key={stat.label} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 text-center hover:border-accent/30 transition-all group">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-slate-300 font-mono text-sm uppercase tracking-widest">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl md:text-5xl font-black text-white">{c.cta.heading}</h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">{c.cta.body}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton href="/contact">
                {c.cta.primaryButton}
              </PremiumButton>
              <PremiumButton href="/our-team" variant="secondary" icon={false}>
                {c.cta.secondaryButton}
              </PremiumButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
