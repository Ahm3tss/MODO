"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export function KineticText({ children, direction = 1 }: { children: string, direction?: number }) {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"]);

    return (
        <div className="overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none absolute inset-0 flex items-center z-0">
            <motion.div style={{ x }} className="flex">
                {Array(4).fill(children).map((text, i) => (
                    <span key={i} className="text-[15vw] font-black text-white leading-[0.8] pr-20">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
