"use client";

import { useState } from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PremiumButton } from "@/components/UI/PremiumButton";
import { content } from "@/lib/content";
import { saveSubmission } from "@/app/admin/actions/submissions";

const c = content.contact;

interface ContactInfo {
  whatsapp_number?: string;
  whatsapp_href?: string;
  email?: string;
  address_line1?: string;
  address_line2?: string;
  hours_weekday?: string;
  hours_weekend?: string;
}

interface ContactClientProps {
  contactInfo?: ContactInfo;
}

export default function ContactClient({ contactInfo }: ContactClientProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  // Use DB values when available, fall back to content.ts
  const info = {
    whatsappNumber: contactInfo?.whatsapp_number ?? c.info.whatsapp.number,
    whatsappHref: contactInfo?.whatsapp_href ?? c.info.whatsapp.href,
    email: contactInfo?.email ?? c.info.email.address,
    addressLine1: contactInfo?.address_line1 ?? c.info.location.line1,
    addressLine2: contactInfo?.address_line2 ?? c.info.location.line2,
    hoursWeekday: contactInfo?.hours_weekday ?? c.info.hours.line1,
    hoursWeekend: contactInfo?.hours_weekend ?? c.info.hours.line2,
  };

  // Extract raw number for wa.me link (strip non-digits)
  const rawNumber = info.whatsappNumber.replace(/\D/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveSubmission(formData);
    const text = `${c.form.whatsappGreeting} ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

      {/* HERO */}
      <section className="min-h-[50vh] flex items-center justify-center relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" alt="Contact" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-[#020410]/50" />
        </div>
        <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
          <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{c.hero.heading}</h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">{c.hero.subtitle}</p>
          <Breadcrumbs className="justify-center" />
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left - Contact Info */}
            <FadeIn className="lg:w-1/3 space-y-12" delay={0.1}>
              <div>
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">{c.info.label}</span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                  {c.info.heading.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h2>
              </div>

              <div className="space-y-8">
                <div className="border-l border-accent pl-6">
                  <MapPin className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-white mb-1">{c.info.location.title}</h3>
                  <p className="text-slate-300 text-sm">{info.addressLine1}<br />{info.addressLine2}</p>
                </div>
                <div className="border-l border-white/10 pl-6 hover:border-accent transition-colors">
                  <Phone className="w-6 h-6 text-white/50 mb-2" />
                  <h3 className="font-bold text-white mb-1">{c.info.whatsapp.title}</h3>
                  <a href={info.whatsappHref} className="text-accent hover:underline">{info.whatsappNumber}</a>
                </div>
                <div className="border-l border-white/10 pl-6 hover:border-accent transition-colors">
                  <Mail className="w-6 h-6 text-white/50 mb-2" />
                  <h3 className="font-bold text-white mb-1">{c.info.email.title}</h3>
                  <a href={`mailto:${info.email}`} className="text-slate-300 hover:text-accent transition-colors">{info.email}</a>
                </div>
                <div className="border-l border-white/10 pl-6 hover:border-accent transition-colors">
                  <Clock className="w-6 h-6 text-white/50 mb-2" />
                  <h3 className="font-bold text-white mb-1">{c.info.hours.title}</h3>
                  <p className="text-slate-300 text-sm">{info.hoursWeekday}<br />{info.hoursWeekend}</p>
                </div>
              </div>
            </FadeIn>

            {/* Right - Form (Glassmorphism) */}
            <FadeIn className="lg:w-2/3" delay={0.3}>
              <form onSubmit={handleSubmit} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 md:p-12 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-mono uppercase tracking-widest text-slate-300 mb-2">{c.form.nameLabel}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-accent focus:outline-none transition-colors"
                      placeholder={c.form.namePlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono uppercase tracking-widest text-slate-300 mb-2">{c.form.emailLabel}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-accent focus:outline-none transition-colors"
                      placeholder={c.form.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-mono uppercase tracking-widest text-slate-300 mb-2">{c.form.phoneLabel}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-accent focus:outline-none transition-colors"
                    placeholder={c.form.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono uppercase tracking-widest text-slate-300 mb-2">{c.form.messageLabel}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder={c.form.messagePlaceholder}
                    required
                  />
                </div>
                <PremiumButton type="submit" className="w-full justify-center" icon={false}>
                  <MessageCircle className="w-5 h-5" />
                  {c.form.submitButton}
                </PremiumButton>
                <p className="text-center text-slate-500 text-sm">{c.form.emailFallback}</p>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
