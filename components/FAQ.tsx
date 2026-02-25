"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    className?: string;
}

export function FAQ({ items, className = "" }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-white/10 last:border-0"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full py-4 flex items-center justify-between text-left group"
                    >
                        <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
                            {item.question}
                        </span>
                        <div className={`
                            w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                            ${openIndex === index ? 'bg-accent text-white rotate-180' : 'bg-white/10 text-white group-hover:bg-accent group-hover:text-white'}
                        `}>
                            {openIndex === index ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                        </div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pb-6 text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
