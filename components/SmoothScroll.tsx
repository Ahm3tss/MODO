"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Allow Navigation to pause/resume scroll when mobile menu opens
        const stop = () => lenis.stop();
        const start = () => lenis.start();
        window.addEventListener("lenis-stop", stop);
        window.addEventListener("lenis-start", start);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.removeEventListener("lenis-stop", stop);
            window.removeEventListener("lenis-start", start);
        };
    }, []);

    return null;
}
