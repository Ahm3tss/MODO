import { cn } from "@/lib/utils";

interface CyberContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    activeLines?: boolean;
}

export function CyberContainer({ children, className, activeLines = true, ...props }: CyberContainerProps) {
    return (
        <div className={cn("relative min-h-[calc(100vh-80px)] pt-20 bg-primary text-white", className)} {...props}>
            {/* Background Grid - White/Light Grid on Dark Navy */}
            <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Active Scanline */}
            {activeLines && (
                <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.5)_50%)] bg-[size:100%_4px]" />
            )}

            <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12">
                {children}
            </div>
        </div>
    );
}
