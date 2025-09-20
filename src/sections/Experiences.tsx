"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CursorLightGrid from "@/components/SpotLight";

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const items = containerRef.current.querySelectorAll(".animate-item");

        gsap.from(items, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.out",
            stagger: 0.2, // animate one after another
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%", // when container is 10% visible
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div className='relative w-screen overflow-x-hidden'>
            {/* Overlay covering all content */}
            <div className='bg-[#222831]/60 absolute top-0 left-0 w-full h-full z-0'></div>

            <CursorLightGrid />

            {/* Content flows normally */}
            <div ref={containerRef} className='relative z-10 flex flex-col items-center justify-center py-20'>
                <p className='text-3xl text-white animate-item'>Blueprints of Innovation</p>
                <p className='text-md text-white/80 font-light max-w-100 text-center mt-3 animate-item'>
                    From small sparks to full-scale products, I transform abstract ideas into living, breathing digital realities.
                </p>

                <div className='flex flex-col w-150 items-start justify-start mt-30 animate-item'>
                    <p className='text-2xl'>13 Delivered Projects <span className='text-2xl text-green-400'>+</span> </p>
                    <p className='text-md text-white/80 font-light max-w-70 text-start'>
                        Successfully built and shipped across mobile, web, and desktop.
                    </p>
                </div>

                <div className='flex flex-col w-150 items-end justify-end mt-10 animate-item'>
                    <div className='text-left'>
                        <p className='text-2xl'>2 Startup Projects</p>
                        <p className='text-md text-white/80 font-light max-w-70'>
                            From idea to launch—turning vision into real, working products.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col w-150 items-start justify-start mt-10 animate-item'>
                    <p className='text-2xl'>5 Unique Clients</p>
                    <p className='text-md text-white/80 font-light max-w-70 text-start'>
                        Partnered with entrepreneurs and businesses worldwide.
                    </p>
                </div>

                <div className='flex flex-col w-150 items-end justify-end mt-10 animate-item'>
                    <div className='text-left'>
                        <p className='text-2xl'>3 Years Freelancing <span className='text-2xl text-green-400'>+</span> </p>
                        <p className='text-md text-white/80 font-light max-w-70'>
                            Growing through projects, challenges, and constant innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
