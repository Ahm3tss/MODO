"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ className = "" }: { className?: string }) {
    const pathname = usePathname();

    if (pathname === "/") return null;

    const segments = pathname.split("/").filter((item) => item !== "");

    return (
        <nav aria-label="Breadcrumb" className={`py-1 ${className}`}>
            <ol className="flex items-center justify-center gap-2 text-sm text-white/60">
                <li>
                    <Link href="/" className="flex items-center hover:text-accent transition-colors">
                        <Home className="w-4 h-4" />
                    </Link>
                </li>
                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join("/")}`;
                    const isLast = index === segments.length - 1;
                    const title = segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

                    return (
                        <li key={segment} className="flex items-center gap-2">
                            <ChevronRight className="w-3 h-3 opacity-50" />
                            {isLast ? (
                                <span className="font-semibold text-white" aria-current="page">
                                    {title}
                                </span>
                            ) : (
                                <Link href={href} className="hover:text-accent transition-colors">
                                    {title}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
