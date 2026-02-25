"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FeatureSplitProps {
    label: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
}

export function FeatureSplit({
    label,
    title,
    description,
    features,
    image,
    imageAlt,
    imagePosition = "right"
}: FeatureSplitProps) {
    const textContent = (
        <motion.div
            initial={{ opacity: 0, x: imagePosition === "right" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
        >
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
                {label}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
                {description}
            </p>
            <ul className="space-y-4 pt-4">
                {features.map((feature, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3"
                    >
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );

    const imageContent = (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
            <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020410]/30 to-transparent" />

            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent/30 rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-accent/30 rounded-bl-xl" />
        </motion.div>
    );

    return (
        <section className="py-20 md:py-28 border-b border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${imagePosition === "left" ? "md:grid-flow-dense" : ""
                    }`}>
                    {imagePosition === "left" ? (
                        <>
                            <div className="md:col-start-1">{imageContent}</div>
                            <div className="md:col-start-2">{textContent}</div>
                        </>
                    ) : (
                        <>
                            {textContent}
                            {imageContent}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
