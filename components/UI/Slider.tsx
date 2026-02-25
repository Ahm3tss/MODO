"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    step?: number;
    className?: string;
}

export function Slider({ min, max, value, onChange, step = 1, className = "" }: SliderProps) {
    const constraintsRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const x = useMotionValue(0);
    // Map x position to percentage (0-100%) for the background fill
    const backgroundWidth = useTransform(x, (latest) => {
        if (width === 0) return "0%";
        const percent = Math.min(Math.max((latest / width) * 100, 0), 100);
        return `${percent}%`;
    });

    // Track container width changes
    useEffect(() => {
        if (!constraintsRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setWidth(entry.contentRect.width);
            }
        });

        observer.observe(constraintsRef.current);

        // Initial measurement
        setWidth(constraintsRef.current.offsetWidth);

        return () => observer.disconnect();
    }, []);

    // Sync handle position with external value prop ONLY if not dragging
    useEffect(() => {
        if (width > 0 && !isDragging) {
            const range = max - min;
            const progressRatio = (value - min) / range;
            const targetX = progressRatio * width;
            animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
        }
    }, [value, width, min, max, x, isDragging]);

    const handleDrag = () => {
        const currentX = x.get();
        // Clamp X between 0 and width
        const clampedX = Math.min(Math.max(currentX, 0), width);

        const progressRatio = clampedX / width;
        const rawValue = min + progressRatio * (max - min);
        // Round to nearest step
        const steppedValue = Math.round(rawValue / step) * step;

        // Clamp final value
        const finalValue = Math.min(Math.max(steppedValue, min), max);

        if (finalValue !== value) {
            onChange(finalValue);
        }
    };

    return (
        <div className={`relative h-20 flex items-center select-none touch-none ${className}`}>
            {/* Track Background */}
            <div
                ref={constraintsRef}
                className="relative h-4 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200"
            >
                {/* Active Fill Bar */}
                <motion.div
                    className="absolute top-0 left-0 h-full bg-accent"
                    style={{ width: backgroundWidth }}
                />
            </div>

            {/* Draggable Handle - Zero Size Container for Perfect Edge Alignment */}
            <motion.div
                ref={handleRef}
                drag="x"
                dragConstraints={constraintsRef}
                dragElastic={0}
                dragMomentum={false}
                onDragStart={() => setIsDragging(true)}
                onDrag={handleDrag}
                onDragEnd={() => {
                    setIsDragging(false);
                    // Snap visually to center of step
                    const range = max - min;
                    const progressRatio = (value - min) / range;
                    const targetX = progressRatio * width;
                    animate(x, targetX, { type: "spring", stiffness: 400, damping: 30 });
                }}
                style={{ x }}
                className="absolute top-1/2 left-0 z-50 w-0 h-0 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
            >
                {/* Actual Hit Area & Visuals (Centered by Parent Flexbox) */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className={`w-8 h-8 bg-white border-[3px] border-accent rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center transform transition-transform ${isDragging ? 'scale-110 ring-4 ring-accent/20' : 'hover:scale-110'}`}>
                        <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                    </div>
                </div>
            </motion.div>

            {/* Ticks */}
            <div className="absolute inset-0 pointer-events-none flex justify-between px-0">
                {Array.from({ length: (max - min) / step + 1 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-px h-2 bg-slate-300 relative top-1/2 -translate-y-1/2 opacity-50"
                        style={{ left: `${(i / ((max - min) / step)) * 100}%` }}
                    />
                ))}
            </div>
        </div>
    );
}
