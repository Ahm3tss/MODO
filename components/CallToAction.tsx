"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/UI/PremiumButton";

interface CallToActionProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
}

export function CallToAction({
    title,
    description,
    buttonText = "Book Consultation",
    buttonHref = "/contact"
}: CallToActionProps) {
    return (
        <div className="w-full bg-primary rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-2xl overflow-hidden relative group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
                    {title}
                </h2>
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                    {description}
                </p>
                <div className="pt-4">
                    <div className="pt-4">
                        <PremiumButton
                            href={buttonHref}
                            className="text-base sm:text-lg sm:px-10 shadow-lg shadow-accent/20"
                        >
                            {buttonText}
                        </PremiumButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
