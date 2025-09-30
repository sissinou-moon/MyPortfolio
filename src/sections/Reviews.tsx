"use client";

import CheckSVG from "@/components/CheckSVG";
import pfp1 from "@/assets/1.jpg";
import pfp2 from "@/assets/2.jpg";
import pfp3 from "@/assets/3.jpg";
import pfp4 from "@/assets/4.jpg";
import pfp5 from "@/assets/5.jpg";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Reviews() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const totalWidth = container.scrollWidth / 3; // width of one set

        gsap.to(container, {
            x: -totalWidth,
            duration: 25, // adjust speed
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: (x) => `${parseFloat(x) % -totalWidth}px`, // loop seamlessly
            },
        });
    }, []);

    const reviews = [
        {
            name: "Patrice P.",
            platform: "Fiverr",
            review:
                "Great experience working with Yassine, delivered exactly what I needed with excellent communication throughout.",
            icon: pfp1,
        },
        {
            name: "Ahmed B.",
            platform: "Local",
            review:
                "Professional and efficient developer, he understood my requirements and delivered on time.",
            icon: pfp2,
        },
        {
            name: "Sara L.",
            platform: "Local",
            review:
                "Very reliable and skilled. The final product was even better than I expected.",
            icon: pfp3,
        },
        {
            name: "Younes K.",
            platform: "Local",
            review:
                "Excellent job! Clear communication, fast delivery, and high-quality work.",
            icon: pfp4,
        },
        {
            name: "Nadia R.",
            platform: "Local",
            review:
                "Abderrahmane is a talented developer who really cares about the details. Highly recommended.",
            icon: pfp5,
        },
    ];

    return (
        <section className="flex flex-col gap-2 items-center justify-center bg-[#F2F2F2] px-10 py-5">
            <div className="flex flex-col items-center justify-center py-7 rounded-2xl w-full bg-[radial-gradient(circle,#EFD491_0%,#DCB262_100%)] overflow-hidden">
                <div className="flex flex-row gap-2">
                    <CheckSVG />
                    <p className="text-sm text-black">Trusted By Clients Around The World</p>
                </div>

                <h1 className="text-3xl text-black font-medium max-w-110 text-center mt-5 mb-5 leading-8">
                    Praised by innovators and entrepreneurs
                </h1>

                <p className="text-black/70 text-sm">
                    Chosen by countless founders and startups to accelerate their growth and success.
                </p>

                <div ref={containerRef} className="flex gap-4 mt-10 w-full">
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-black/20 flex-shrink-0 flex flex-col gap-2 bg-[#ECE4D6] px-5 py-3 max-w-85"
                        >
                            <div className="flex flex-row gap-1 items-center justify-start">
                                <img
                                    src={review.icon.src}
                                    alt=""
                                    width={37}
                                    className="rounded-full"
                                />
                                <div className="flex flex-col items-start justify-start">
                                    <p className="text-xs text-black font-medium">{review.name}</p>
                                    <p className="text-xs font-light text-black">{review.platform}</p>
                                </div>
                            </div>
                            <div className="h-[0.5px] bg-black/20 mt-3 mb-3"></div>
                            <p className="text-black text-sm line-clamp-2">
                                {review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
