"use client";

import { ReactNode } from "react";

interface EditorialSectionProps {
    /** The label text shown above the main heading (e.g., "THE CONTEXT") */
    label?: string;
    /** Main headline - displays in massive bold typography */
    headline: ReactNode;
    /** Supporting description text */
    description?: string;
    /** The content on the right side (numbered items, features, etc.) */
    children: ReactNode;
    /** Optional className for the section */
    className?: string;
    /** Whether the left column should be sticky on scroll */
    sticky?: boolean;
}

/**
 * EditorialSection - Homepage-style split layout
 * 
 * Creates the signature MODO layout with:
 * - 1/3 width sticky left column with massive headline
 * - 2/3 width right column for content
 * - Subtle section border at bottom
 */
export function EditorialSection({
    label,
    headline,
    description,
    children,
    className = "",
    sticky = true
}: EditorialSectionProps) {
    return (
        <section className={`py-24 md:py-32 relative border-b border-white/5 z-10 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Left Column - Headlines */}
                    <div className={`md:w-1/3 ${sticky ? "md:sticky md:top-32" : ""}`}>
                        {label && (
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
                                {label}
                            </span>
                        )}
                        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
                            {headline}
                        </h2>
                        {description && (
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:w-2/3 grid grid-cols-1 gap-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
