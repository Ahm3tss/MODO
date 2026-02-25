"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Plane, Stethoscope, CheckCircle2 } from "lucide-react";

interface TimelineEvent {
    day: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    time: string;
}

const timelineData: TimelineEvent[] = [
    {
        day: "Day 01",
        time: "14:00",
        title: "VIP Arrival",
        description: "Your private chauffeur greets you at the airport in a luxury Mercedes Vito. You are transferred to your 5-star hotel to settle in.",
        icon: <Plane className="w-6 h-6" />,
        features: ["VIP Transfer", "5-Star Hotel", "Consultation"]
    },
    {
        day: "Day 02",
        time: "09:00",
        title: "The Procedure",
        description: "Robotic analysis followed by the DHI/Sapphire transplant. The process is pain-free while you watch Netflix or relax.",
        icon: <Stethoscope className="w-6 h-6" />,
        features: ["Robotic Plan", "Pain-Free", "Lunch Included"]
    },
    {
        day: "Day 03",
        time: "11:00",
        title: "Departure",
        description: "Final check-up and hair wash. We provide your medical kit, aftercare plan, and transfer you back to the airport.",
        icon: <CheckCircle2 className="w-6 h-6" />,
        features: ["Medical Kit", "Final Wash", "Airport Transfer"]
    }
];

export function TransformationTimeline() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

    return (
        <section className="bg-primary relative">
            {/* DESKTOP layout (Sticky Scrolljack) */}
            <div ref={targetRef} className="hidden md:block relative h-[175vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <BackgroundEffects />

                    <div className="absolute top-12 left-24 z-10">
                        <ItineraryBadge />
                        <h2 className="text-6xl font-black text-white font-heading tracking-tight mt-4">
                            Your 3-Day Journey
                        </h2>
                    </div>

                    <motion.div
                        style={{ x }}
                        className="flex gap-12 pl-24 pr-24 relative z-10"
                    >
                        {timelineData.map((item, index) => (
                            <Card key={index} item={item} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* MOBILE layout (Native Snap Scroll) */}
            <div className="md:hidden py-16 px-4 relative min-h-screen flex flex-col justify-center">
                <BackgroundEffects />

                <div className="relative z-10 mb-8 px-2">
                    <ItineraryBadge />
                    <h2 className="text-4xl font-black text-white font-heading tracking-tight mt-4 text-balance">
                        Your 3-Day Journey
                    </h2>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 -mx-4 px-6 scrollbar-hide">
                    {timelineData.map((item, index) => (
                        <div key={index} className="snap-center flex-shrink-0">
                            <Card item={item} index={index} isMobile />
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 text-[10px] uppercase tracking-widest font-bold animate-pulse">
                    Swipe to explore &rarr;
                </div>
            </div>
        </section>
    );
}

function BackgroundEffects() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
    );
}

function ItineraryBadge() {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Travel Itinerary
        </div>
    );
}

function Card({ item, index, isMobile = false }: { item: TimelineEvent; index: number; isMobile?: boolean }) {
    return (
        <div className={`group relative ${isMobile ? 'w-[85vw] max-w-[340px]' : 'w-[600px] h-[480px]'} flex-shrink-0`}>
            {/* Connection Line Node (Desktop only) */}
            {!isMobile && (
                <div className="absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-primary border-2 border-accent z-20 shadow-[0_0_10px_#22d3ee]" />
            )}

            <div className={`
                relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl 
                hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 flex flex-col 
                ${isMobile ? 'h-auto min-h-[420px]' : 'h-full'}
            `}>

                {/* Top Bar */}
                <div className="px-6 md:px-8 py-5 md:py-6 border-b border-white/5 flex justify-between items-center bg-black/20">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl md:text-5xl font-black text-white/10 font-heading">
                            0{index + 1}
                        </span>
                        <div className="flex flex-col">
                            <span className="text-accent font-mono text-xs md:text-sm uppercase tracking-wider font-bold">
                                {item.day}
                            </span>
                            <span className="text-slate-500 text-[10px] md:text-xs font-medium">Istanbul, TR</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block text-slate-300 text-[10px] md:text-xs uppercase tracking-wider">Est. Time</span>
                        <span className="text-white font-mono text-sm md:text-base">{item.time}</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                    {/* Floating Icon Background */}
                    <div className="absolute right-4 bottom-4 text-white/[0.02] transform rotate-12 scale-[3] pointer-events-none">
                        {item.icon}
                    </div>

                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent ring-1 ring-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 font-heading tracking-tight">
                        {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6 md:mb-8 max-w-sm">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {item.features.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 md:px-3 md:py-1 rounded-md bg-white/5 border border-white/5 text-[10px] md:text-xs text-slate-300 font-medium font-mono whitespace-nowrap">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Barcode effect */}
                <div className="h-1.5 md:h-2 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-30" />
            </div>
        </div>
    );
}
