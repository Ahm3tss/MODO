"use client";

import { ReactNode } from "react";

interface NumberedItemProps {
    /** The number to display (e.g., 1, 2, 3) */
    number: number;
    /** Title of the item */
    title: string;
    /** Description text */
    description: string;
    /** Icon to display (optional) */
    icon?: ReactNode;
}

/**
 * NumberedItem - Homepage-style numbered feature
 * 
 * Creates the signature MODO feature display with:
 * - Large ghost number (white/10)
 * - Border-left accent on hover
 * - Clean typography hierarchy
 */
export function NumberedItem({ number, title, description, icon }: NumberedItemProps) {
    const formattedNumber = number.toString().padStart(2, "0");

    return (
        <div className="group border-l border-white/10 pl-8 hover:border-accent transition-colors duration-500">
            <div className="text-4xl font-black text-white/10 mb-2 group-hover:text-accent transition-colors">
                {formattedNumber}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-slate-300 max-w-md">{description}</p>
        </div>
    );
}

interface GhostNumberProps {
    /** The number to display */
    number: number | string;
    /** Size variant */
    size?: "sm" | "md" | "lg";
}

/**
 * GhostNumber - Large transparent number marker
 */
export function GhostNumber({ number, size = "md" }: GhostNumberProps) {
    const sizeClasses = {
        sm: "text-4xl",
        md: "text-6xl",
        lg: "text-8xl"
    };

    const formatted = typeof number === "number"
        ? number.toString().padStart(2, "0")
        : number;

    return (
        <span className={`${sizeClasses[size]} font-black text-white/10 select-none`}>
            {formatted}
        </span>
    );
}

interface TimelineItemProps {
    /** Step number */
    step: number;
    /** Title of the phase */
    title: string;
    /** Description */
    description: string;
    /** Icon component */
    icon?: ReactNode;
}

/**
 * TimelineItem - For protocol/process steps
 */
export function TimelineItem({ step, title, description, icon }: TimelineItemProps) {
    return (
        <div className="relative pl-12 pb-12 last:pb-0">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            {/* Step marker */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020410] border border-white/20 flex items-center justify-center">
                <span className="text-xs font-mono text-white/50">{step.toString().padStart(2, "0")}</span>
            </div>

            <div className="pt-1">
                <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                <p className="text-slate-300 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
