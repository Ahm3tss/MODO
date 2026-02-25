"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/UI/PremiumButton";
import { content } from "@/lib/content";

const c = content.shared.navigation;

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#020410]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black tracking-tighter text-white">{c.logo}</span>
                        <span className="text-xs font-mono text-accent uppercase tracking-widest">{c.logoSuffix}</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {c.links.map((link) => {
                            if ("items" in link && link.items) {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => setOpenDropdown(link.name)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                                            {link.name} <ChevronDown className="w-3 h-3" />
                                        </button>
                                        {openDropdown === link.name && (
                                            <div className="absolute top-full left-0 mt-2 w-72 bg-[#0a0c1a]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl">
                                                {link.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                                    >
                                                        <div>
                                                            <span className="text-white text-sm font-medium group-hover:text-accent transition-colors">{item.name}</span>
                                                            <span className="block text-xs text-slate-500">{item.desc}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href!}
                                    className={`px-4 py-2 text-sm transition-colors ${pathname === link.href ? "text-accent" : "text-slate-300 hover:text-white"}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <PremiumButton href="/contact" className="hidden lg:inline-flex px-6 py-3 text-sm">
                            Free Consultation
                        </PremiumButton>
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-[#020410]/98 backdrop-blur-xl border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
                        {c.links.map((link) => {
                            if ("items" in link && link.items) {
                                return (
                                    <div key={link.name} className="space-y-3">
                                        <span className="text-accent font-mono text-xs uppercase tracking-widest">{link.name}</span>
                                        <div className="space-y-1 pl-4 border-l border-white/10">
                                            {link.items.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-2 text-slate-300 hover:text-white transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href!}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-lg font-bold ${pathname === link.href ? "text-accent" : "text-white hover:text-accent"} transition-colors`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <PremiumButton href="/contact" onClick={() => setIsOpen(false)} className="w-full justify-center mt-4 py-3">
                            Free Consultation
                        </PremiumButton>
                    </div>
                </div>
            )}
        </nav>
    );
}
