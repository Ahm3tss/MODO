"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    altBefore?: string;
    altAfter?: string;
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    altBefore = "Before hair transplant",
    altAfter = "After hair transplant"
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener("mouseup", handleGlobalMouseUp);
        return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt={altAfter}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-4 right-4 bg-accent px-4 py-2 rounded-full">
                    <span className="text-white font-heading font-bold text-sm uppercase">After</span>
                </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt={altBefore}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-4 left-4 bg-primary px-4 py-2 rounded-full">
                    <span className="text-white font-heading font-bold text-sm uppercase">Before</span>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-col-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Handle Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-accent">
                    <div className="flex gap-1">
                        <div className="w-0.5 h-6 bg-accent"></div>
                        <div className="w-0.5 h-6 bg-accent"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
