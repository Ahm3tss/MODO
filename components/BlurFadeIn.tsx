"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BlurFadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

export function BlurFadeIn({ children, delay = 0, className = "", direction = "up" }: BlurFadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center 0.6"],
    });

    const directionOffset = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
    };

    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const blur = useTransform(scrollYProgress, [0, 0.8], [12, 0]);
    const translateY = useTransform(
        scrollYProgress,
        [0, 0.8],
        [directionOffset[direction].y, 0]
    );
    const translateX = useTransform(
        scrollYProgress,
        [0, 0.8],
        [directionOffset[direction].x, 0]
    );

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                y: translateY,
                x: translateX,
                filter: useTransform(blur, (v) => `blur(${v}px)`),
            }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
