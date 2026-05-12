import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 to `target` when the element enters view.
 * Returns a ref to attach to your container, and the current displayed value.
 */
export function useCountUp(target: number, duration = 1800) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [count, setCount] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const startTime = performance.now();
                    const animate = (now: number) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.round(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return { ref, count };
}
