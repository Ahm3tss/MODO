"use client";

import { X } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { FadeIn } from "./FadeIn";
import { useEffect } from "react";

interface ResultLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    beforeImage: string;
    afterImage: string;
    technique: string;
    grafts: number;
}

export function ResultLightbox({
    isOpen,
    onClose,
    beforeImage,
    afterImage,
    technique,
    grafts
}: ResultLightboxProps) {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#020410]/95 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Content Container */}
            <FadeIn className="relative w-full max-w-6xl z-10 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">

                {/* Header / Close Bar */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20 pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-auto">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">{technique} • {grafts.toLocaleString()} Grafts</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Slider (Large) */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
                    <BeforeAfterSlider
                        beforeImage={beforeImage}
                        afterImage={afterImage}
                    />
                </div>
            </FadeIn>
        </div>
    );
}
