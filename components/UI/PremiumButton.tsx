import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    icon?: boolean;
    variant?: "primary" | "secondary";
}

export function PremiumButton({ href, children, className, icon = true, variant = "primary", ...props }: PremiumButtonProps) {
    const baseStyles = "inline-flex items-center gap-2 px-10 py-4 font-bold tracking-wide transition-all duration-300 active:scale-95 uppercase text-base rounded-full hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-accent text-white hover:bg-white hover:text-black shadow-[0_0_30px_rgba(249,115,22,0.4)]",
        secondary: "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-white backdrop-blur-sm"
    };

    const combinedStyles = cn(baseStyles, variants[variant], className);

    const content = (
        <>
            {children}
            {icon && <ArrowRight className="w-4 h-4" />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {content}
        </button>
    );
}
