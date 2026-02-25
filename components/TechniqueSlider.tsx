"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PremiumButton } from "@/components/UI/PremiumButton";
import { content } from "@/lib/content";

import "swiper/css";
import "swiper/css/effect-fade";

const c = content.home.techniques;

export function TechniqueSlider() {
    const [bgSwiper, setBgSwiper] = useState<SwiperType | null>(null);
    const [cardSwiper, setCardSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        if (bgSwiper) bgSwiper.slidePrev();
    };

    const handleNext = () => {
        if (bgSwiper) bgSwiper.slideNext();
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Slider - Full Screen */}
            <Swiper
                modules={[EffectFade, Autoplay, Controller]}
                effect="fade"
                speed={800}
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                onSwiper={setBgSwiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                controller={{ control: cardSwiper }}
                className="absolute inset-0 w-full h-full"
            >
                {c.items.map((technique) => (
                    <SwiperSlide key={technique.id} className="relative">
                        <Image
                            src={technique.image}
                            alt={technique.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#020410] via-[#020410]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-[#020410]/30" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left Content */}
            <div className="absolute inset-y-0 left-0 z-10 flex items-center">
                <div className="max-w-2xl px-8 md:px-16 lg:px-24">
                    <p className="text-accent font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
                        {c.sectionLabel}
                    </p>
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white mb-6">
                        {c.items[activeIndex].title.split(" ")[0]}
                        <br />
                        <span className="text-accent">{c.items[activeIndex].title.split(" ")[1]}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-md mb-8">
                        {c.items[activeIndex].description}
                    </p>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                        <span className="text-white/40 font-mono text-sm ml-4">
                            {String(activeIndex + 1).padStart(2, "0")} / {String(c.items.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Floating Info Card - Bottom Right */}
            <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 w-80 md:w-96">
                <Swiper
                    modules={[Controller]}
                    onSwiper={setCardSwiper}
                    controller={{ control: bgSwiper }}
                    allowTouchMove={false}
                    speed={800}
                    loop={true}
                    className="w-full"
                >
                    {c.items.map((technique) => (
                        <SwiperSlide key={technique.id}>
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                                <p className="text-accent font-mono text-xs tracking-widest uppercase mb-2">
                                    {technique.subtitle}
                                </p>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {technique.title}
                                </h3>

                                {/* Stats */}
                                {technique.stats && (
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {technique.stats.map((stat) => (
                                            <div key={stat.label}>
                                                <div className="text-xl font-black text-white">{stat.value}</div>
                                                <div className="text-xs text-slate-300 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <PremiumButton
                                    href={technique.href}
                                    variant="secondary"
                                    className="w-full justify-center mt-4"
                                >
                                    {c.seeMoreLabel}
                                </PremiumButton>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Progress Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
                {c.items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => bgSwiper?.slideToLoop(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? "bg-accent w-6" : "bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
