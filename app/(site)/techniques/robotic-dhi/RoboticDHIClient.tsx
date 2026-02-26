"use client";

import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { SchemaFAQ } from "@/components/SchemaFAQ";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Zap, Target, Shield, Clock, Activity, ChevronRight, CheckCircle2 } from "lucide-react";
import { content } from "@/lib/content";
import { BlurEdgeMask } from "@/components/BlurEdgeMask";
import { BlurFadeIn } from "@/components/BlurFadeIn";

const c = content.techniques.roboticDhi;
const stepIcons = [Target, Cpu, Shield, Zap];
const featureIcons = [Cpu, Clock, Target, Activity, Shield, Zap];

interface AnimatedStat {
  value: string | number;
  suffix: string;
  label: string;
}

interface RoboticDHIClientProps {
  animatedStats?: AnimatedStat[];
}

export default function RoboticDHIClient({ animatedStats: animatedStatsProp }: RoboticDHIClientProps) {
  const animatedStats = animatedStatsProp?.length ? animatedStatsProp : c.animatedStats;

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Blur Edge Mask */}
      <BlurEdgeMask />
      {/* Noise texture */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO - Full Bleed Visual with Floating Elements
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <Image
            src={c.hero.image}
            alt="Robotic precision technology"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020410] via-transparent to-[#020410]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020410] via-transparent to-[#020410]/50" />
        </div>

        {/* Floating accent shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <Cpu className="w-4 h-4 text-accent" />
                <span className="text-accent font-mono text-xs tracking-widest uppercase">{c.hero.badge}</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                <span className="text-white">{c.hero.headingLine1}</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent to-orange-400">{c.hero.headingLine2}</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-lg leading-relaxed">
                {c.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="premium-button !py-4 !px-8 text-base">
                  {c.hero.ctaPrimary}
                </a>
                <a href="#process" className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors">
                  {c.hero.ctaSecondary} <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right: Visual Stats Card — always uses content.ts (these are curated metrics) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
                <div className="text-center mb-8">
                  <span className="text-accent font-mono text-xs tracking-widest uppercase">{c.performanceMetrics.label}</span>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {c.performanceMetrics.items.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-4xl md:text-5xl font-black text-white">{metric.value}<span className="text-accent">{metric.suffix}</span></div>
                      <div className="text-xs text-slate-300 uppercase tracking-widest mt-2">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 uppercase tracking-widest">{c.hero.scrollLabel}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS - Animated Counters (Full Width Dramatic)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {animatedStats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROCESS - Horizontal Visual Journey
      ═══════════════════════════════════════════════════════════════ */}
      <section id="process" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.process.label}</span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mb-4">
              {c.process.heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className="text-slate-300 text-lg">{c.process.subtitle}</p>
          </div>

          {/* Horizontal Process Cards */}
          <div className="grid md:grid-cols-4 gap-4">
            {c.process.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-accent/30 rounded-2xl p-6 transition-all duration-500"
                >
                  {/* Step Number Background */}
                  <div className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] group-hover:text-accent/10 transition-colors">
                    {step.visual}
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Connector line (except last) */}
                  {i < c.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-white/10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COMPARISON - Full Width Dramatic Split
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-y border-white/5 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-white/[0.02]" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.comparison.label}</span>
            <h2 className="text-4xl md:text-6xl font-black text-white">{c.comparison.heading}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 md:gap-px bg-white/5 rounded-3xl overflow-hidden">
            {/* Robotic DHI - Winner */}
            <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-8 md:p-12 relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent rounded-full text-xs font-bold text-black uppercase">
                {c.comparison.recommended}
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{c.comparison.roboticDhi.title}</h3>
                  <p className="text-accent text-sm">{c.comparison.roboticDhi.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {c.comparison.roboticDhi.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Manual FUE - Comparison */}
            <div className="bg-white/[0.02] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white/40" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white/60">{c.comparison.manualFue.title}</h3>
                  <p className="text-slate-500 text-sm">{c.comparison.manualFue.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {c.comparison.manualFue.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-white/20 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY ROBOTIC - Visual Features Grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Sticky Header */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
              <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.whyRobotic.label}</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-4">
                {c.whyRobotic.heading.split("\n").map((line, i) => (
                  <span key={i}>{line}{i < c.whyRobotic.heading.split("\n").length - 1 && <br />}</span>
                ))}
              </h2>
              <p className="text-slate-300">{c.whyRobotic.subtitle}</p>
            </div>

            {/* Right: Feature Grid */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {c.whyRobotic.features.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 rounded-2xl border border-white/5 hover:border-accent/20 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                    <p className="text-slate-300 text-sm">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════ */}
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

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <CallToAction
            title={c.cta.title}
            description={c.cta.description}
            buttonText={c.cta.buttonText}
          />
        </div>
      </section>
    </div>
  );
}
