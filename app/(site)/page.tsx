"use client";

import Link from "next/link";
import { NorwoodCalculator } from "@/components/NorwoodCalculator";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TechniqueSlider } from "@/components/TechniqueSlider";
import { TrustBar } from "@/components/TrustBar";
import { ProcessSteps } from "@/components/ProcessSteps";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Quote } from "lucide-react";
import { BlurFadeIn } from "@/components/BlurFadeIn";
import { BlurEdgeMask } from "@/components/BlurEdgeMask";
import { content } from "@/lib/content";
import { PremiumButton } from "@/components/UI/PremiumButton";

const c = content.home;

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
      {/* Blur Edge Mask — cinematic viewport blur */}
      <BlurEdgeMask />

      {/* Global Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION - Emotional Hook + Dual CTAs
      ═══════════════════════════════════════════════════════════════ */}
      <section className="h-screen flex items-center justify-center relative border-b border-white/5 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }} className="text-center z-10 max-w-5xl px-6 relative">
          <p className="text-accent font-mono text-xs md:text-sm mb-6 tracking-[0.3em] uppercase">{c.hero.tagline}</p>
          <h1 className="text-[10vw] md:text-[9vw] font-black leading-[0.9] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            {c.hero.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            {c.hero.subtitle}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton
              href="/contact"
            >
              {c.hero.ctaPrimary}
            </PremiumButton>
            <PremiumButton
              href="/results"
              variant="secondary"
            >
              {c.hero.ctaSecondary}
            </PremiumButton>
          </div>
        </motion.div>

        {/* Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/hero-video.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-[#020410]/50"></div>
        </div>

        {/* Scroll Indicator */}
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
          TRUST BAR - Animated Statistics
      ═══════════════════════════════════════════════════════════════ */}
      <BlurFadeIn>
        <TrustBar />
      </BlurFadeIn>

      {/* ═══════════════════════════════════════════════════════════════
          PROBLEM/AGITATION - Empathy Section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BlurFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              {c.empathy.heading}<br />
              <span className="text-slate-500">{c.empathy.headingMuted}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              {c.empathy.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {c.empathy.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-accent/30 text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </BlurFadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TECHNIQUE SLIDER - Synchronized Full-Screen Swiper
      ═══════════════════════════════════════════════════════════════ */}
      <BlurFadeIn>
        <TechniqueSlider />
      </BlurFadeIn>

      {/* ═══════════════════════════════════════════════════════════════
          BEFORE/AFTER - Results Gallery
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFadeIn>
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.results.sectionLabel}</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                {c.results.heading}
              </h2>
              <p className="text-xl text-slate-500 font-mono uppercase tracking-widest">
                {c.results.subtitle}
              </p>
            </div>

            <div className="max-w-5xl mx-auto border border-white/10 rounded-3xl overflow-hidden">
              <BeforeAfterSlider
                beforeImage="/before-clinical.webp"
                afterImage="/hero-robot.webp"
              />
            </div>

            <div className="text-center mt-12">
              <Link href="/results" className="inline-flex items-center gap-2 text-white border-b border-accent pb-1 hover:text-accent transition-colors uppercase tracking-widest text-sm font-bold">
                {c.results.linkText} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </BlurFadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SOCIAL PROOF - Testimonial
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <BlurFadeIn className="text-center">
            <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8">
              {c.testimonial.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-slate-300">
              <span className="text-white font-medium">{c.testimonial.author}</span> — {c.testimonial.country}
            </p>
          </BlurFadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3 SIMPLE STEPS - Horizontal Process
      ═══════════════════════════════════════════════════════════════ */}
      <BlurFadeIn>
        <ProcessSteps />
      </BlurFadeIn>

      {/* ═══════════════════════════════════════════════════════════════
          NORWOOD CALCULATOR - Lead Magnet
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#020410] border-t border-white/5">
        <BlurFadeIn>
          <NorwoodCalculator />
        </BlurFadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA - Urgency + Booking
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-gradient-to-b from-[#020410] to-accent/10 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <BlurFadeIn>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
              {c.finalCta.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {c.finalCta.heading}
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">
              {c.finalCta.body}
            </p>
            <PremiumButton href="/contact" className="h-16 px-12 text-lg">
              Book Free Analysis
            </PremiumButton>
            <p className="text-slate-500 text-sm mt-6">
              {c.finalCta.disclaimer}
            </p>
          </BlurFadeIn>
        </div>

        {/* Background accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />
      </section>
    </div>
  );
}
