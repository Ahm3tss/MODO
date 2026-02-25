"use client";

import { Star, Award, TrendingUp } from "lucide-react";

export function ZeroGravityBar() {
    return (
        <section className="relative w-full bg-[#020410] py-12 overflow-hidden border-b border-white/5">
            {/* Background Marquee (Parallax Effect) */}
            <div className="absolute inset-0 flex items-center select-none opacity-10 pointer-events-none">
                <div className="flex whitespace-nowrap animate-marquee">
                    {Array(4).fill(null).map((_, index) => (
                        <div key={index} className="flex flex-shrink-0">
                            <span className="text-[5rem] md:text-[8rem] font-black text-white px-8">PRECISION</span>
                            <span className="text-[5rem] md:text-[8rem] font-black text-transparent px-8" style={{ WebkitTextStroke: "1px white" }}>ARTISTRY</span>
                            <span className="text-[5rem] md:text-[8rem] font-black text-white px-8">DENSITY</span>
                            <span className="text-[5rem] md:text-[8rem] font-black text-transparent px-8" style={{ WebkitTextStroke: "1px white" }}>SCULPTING</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Glass Pod */}
            <div className="relative z-10 container mx-auto px-4 flex justify-center">
                <div className="animate-float backdrop-blur-xl bg-white/5 border border-white/10 rounded-full py-4 px-8 md:py-6 md:px-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform scale-[0.6] sm:scale-100 md:scale-100 origin-center whitespace-nowrap">
                    <div className="flex flex-row items-center gap-6 md:gap-12 text-white">

                        {/* Rating */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex gap-1 text-yellow-400">
                                <Star className="w-5 h-5 fill-yellow-400" />
                                <Star className="w-5 h-5 fill-yellow-400" />
                                <Star className="w-5 h-5 fill-yellow-400" />
                                <Star className="w-5 h-5 fill-yellow-400" />
                                <Star className="w-5 h-5 fill-yellow-400" />
                            </div>
                            <div className="text-sm font-medium text-slate-300">
                                <span className="font-bold text-white">4.9/5</span> on Google
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-12 bg-white/10" />

                        {/* Metric */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                                5,000+
                            </div>
                            <div className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                                Procedures
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-12 bg-white/10" />

                        {/* Certification */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-orange-500/20 p-2 rounded-full border border-orange-500/30">
                                <Award className="w-6 h-6 text-orange-400" />
                            </div>
                            <div className="text-xs font-bold tracking-wide text-slate-300 uppercase">
                                ISHRS Certified
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
