"use client";

import { motion, useScroll } from "framer-motion";

export function GlobalRails() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            {/* Minimal Left Rail - Scroll Progress Only */}
            <div className="fixed inset-y-0 left-0 z-30 pointer-events-none w-[3px] md:w-[4px]">
                <div className="h-full w-full bg-white/5 relative">
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/80 to-accent origin-top"
                    />
                </div>
            </div>
        </>
    );
}
