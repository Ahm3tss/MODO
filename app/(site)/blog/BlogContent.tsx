"use client";

import { CallToAction } from "@/components/CallToAction";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { FadeIn } from "@/components/FadeIn";

interface Post {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    category: string;
    coverImage?: string;
}

interface BlogContentProps {
    posts: Post[];
}

export function BlogContent({ posts }: BlogContentProps) {
    const featuredPosts = posts.slice(0, 3);
    const gridPosts = posts.slice(3);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
            {/* Global Texture */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

            {/* ═══════════════════════════════════════════════════════════════
                FEATURED POST SLIDER - Scribbler Style
            ═══════════════════════════════════════════════════════════════ */}
            <section className="min-h-screen relative pt-20">
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={600}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    onSwiper={setSwiper}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                    loop={true}
                    className="h-screen"
                >
                    {featuredPosts.map((post, idx) => (
                        <SwiperSlide key={post.slug}>
                            <div className="h-full flex flex-col lg:flex-row">
                                {/* Left: Image (60%) */}
                                <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-full">
                                    {post.coverImage ? (
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority={idx === 0}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020410]/50 lg:bg-gradient-to-r lg:from-transparent lg:to-[#020410]" />
                                </div>

                                {/* Right: Content Block (40%) */}
                                <div className="relative w-full lg:w-[40%] h-[50vh] lg:h-full bg-accent/10 flex items-center">
                                    <div className="p-8 md:p-12 lg:p-16 max-w-xl">
                                        {/* Category */}
                                        <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-widest mb-6">
                                            {post.category}
                                        </span>

                                        {/* Title */}
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-slate-300 text-lg leading-relaxed mb-8 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Date + CTA */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-300 text-sm font-mono">
                                                {post.date}
                                            </span>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-bold uppercase tracking-wider text-sm"
                                            >
                                                Read More <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Slider Controls */}
                <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
                    <button
                        onClick={() => swiper?.slidePrev()}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors bg-black/50 backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={() => swiper?.slideNext()}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors bg-black/50 backdrop-blur-sm"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                    <span className="text-white/40 font-mono text-sm ml-2">
                        {String(activeIndex + 1).padStart(2, "0")} / {String(featuredPosts.length).padStart(2, "0")}
                    </span>
                </div>

                {/* Breadcrumbs */}
                <div className="absolute top-28 left-8 z-20">
                    <Breadcrumbs />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                MASONRY GRID - 3 Column Layout
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <FadeIn>
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Archive</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                                ALL ARTICLES
                            </h2>
                        </FadeIn>
                    </div>

                    {/* Masonry Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridPosts.map((post, index) => (
                            <FadeIn
                                key={post.slug}
                                delay={index * 0.05} // Stagger
                                className={`group block ${index % 5 === 0 ? "lg:row-span-2" : ""
                                    }`}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block h-full"
                                >
                                    <article className="h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300">
                                        {/* Image */}
                                        <div className={`relative overflow-hidden ${index % 5 === 0 ? "h-80 lg:h-[400px]" : "h-48 md:h-56"
                                            }`}>
                                            {post.coverImage ? (
                                                <Image
                                                    src={post.coverImage}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#020410]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Category Tag */}
                                            <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3 rounded">
                                                {post.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight mb-3 line-clamp-2 font-serif">
                                                {post.title}
                                            </h3>

                                            {/* Date */}
                                            <p className="text-slate-500 text-sm font-mono">
                                                {post.date}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeIn delay={0.3}>
                        <CallToAction title="Start Your Journey" description="Book a free analysis with our specialists." buttonText="Book Analysis" />
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
