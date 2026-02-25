"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface CinematicTechniqueProps {
    id: string;
    number: string;
    title: string;
    description: string;
    subtext: string;
    imageUrl: string;
    linkUrl: string;
}

export function CinematicTechnique({ id, number, title, description, subtext, imageUrl, linkUrl }: CinematicTechniqueProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section id={id} ref={ref} className="py-0 relative group border-t border-white/5 overflow-hidden">
            <div className="absolute top-0 left-6 text-xs font-mono text-white/30 mt-12 md:mt-32 z-20">
                TECHNIQUE {number}
            </div>

            <div className="w-full min-h-[60vh] md:h-[80vh] flex items-center relative">
                {/* Macro Background with Parallax */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        style={{ y, scale: 1.1 }}
                        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700 blur-[2px] group-hover:blur-0"
                        initial={{ backgroundImage: `url('${imageUrl}')` }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                    </motion.div>
                </div>

                <div className="relative z-10 px-6 md:px-32 w-full">
                    <h2 className="text-[12vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 group-hover:text-white transition-colors">
                        {title}
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mt-8 border-t border-white/20 pt-8 gap-8">
                        <p className="text-xl md:text-4xl font-light max-w-xl text-white/80">
                            {description}
                            <span className="block text-slate-500 text-lg mt-2 font-mono">{subtext}</span>
                        </p>

                        <Link href={linkUrl} className="group/btn flex items-center gap-4">
                            <span className="text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity">Explore</span>
                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                                <ArrowDown className="-rotate-90" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
