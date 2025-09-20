"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingPoints() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 }); // init with safe defaults

    useEffect(() => {
        if (!containerRef.current) return;

        // set initial mouse position (safe to use window here)
        mouse.current.x = window.innerWidth / 2;
        mouse.current.y = window.innerHeight / 2;

        const points = containerRef.current.querySelectorAll<HTMLDivElement>(".point");

        // Animate floating
        points.forEach((point) => {
            const animate = () => {
                gsap.to(point, {
                    x: `+=${gsap.utils.random(-150, 150)}`,
                    y: `+=${gsap.utils.random(-150, 150)}`,
                    opacity: gsap.utils.random(0.2, 1),
                    duration: gsap.utils.random(2, 4),
                    ease: "sine.inOut",
                    onComplete: animate,
                });
            };
            animate();
        });

        // Mouse move effect
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            points.forEach((point) => {
                const rect = point.getBoundingClientRect();
                const dx = rect.left + rect.width / 2 - mouse.current.x;
                const dy = rect.top + rect.height / 2 - mouse.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    gsap.to(point, {
                        x: `+=${dx / 5}`,
                        y: `+=${dy / 5}`,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
            {Array.from({ length: 700 }).map((_, i) => {
                const isWide = Math.random() > 0.8;
                const isBlurry = Math.random() > 0.7;
                const width = isWide ? gsap.utils.random(2, 6) : 2;
                const height = isWide ? 2 : 2;

                const opacity = gsap.utils.random(0.2, 0.9);

                return (
                    <div
                        key={i}
                        className="point absolute rounded-full bg-[#D5AA5C]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${isBlurry ? width * 2 : width}px`,
                            height: `${isBlurry ? height * 2 : height}px`,
                            opacity,
                            filter: isBlurry ? "blur(3px)" : "none",
                        }}
                    />
                );
            })}
        </div>
    );
}
