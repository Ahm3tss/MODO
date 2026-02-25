"use client";

export function BlurEdgeMask() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 z-30 pointer-events-none blur-edge-mask"
            style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                    "linear-gradient(to bottom, black 0%, transparent 12%, transparent 88%, black 100%)",
                WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, transparent 12%, transparent 88%, black 100%)",
            }}
        />
    );
}
