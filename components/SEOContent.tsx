import React from "react";

interface SEOContentProps {
    title: string;
    children: React.ReactNode;
}

export function SEOContent({ title, children }: SEOContentProps) {
    return (
        <section className="py-20 md:py-24 border-b border-white/5 relative z-10 bg-[#020410]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-slate-300 font-light leading-relaxed">
                    {children}
                </div>
            </div>
        </section>
    );
}
