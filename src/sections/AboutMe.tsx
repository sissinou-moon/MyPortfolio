"use client"

import {StarIcon} from "@/components/StartIcon";
import coding from "@/assets/icons/Type Script.json"
import design from "@/assets/icons/Figma.json"
import mobile from "@/assets/icons/App.json"
import backend from "@/assets/icons/Server.json"
import freelance from "@/assets/icons/Staff.json"
import learning from "@/assets/icons/Register.json"
import LordIcon from "@/components/AnimatedIcons";
import gsap from "gsap";
import {useEffect, useRef} from "react";

export default function AboutMe() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const totalWidth = container.scrollWidth / 2; // width of one set
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

        tl.to(container, {
            x: -totalWidth,
            duration: 15, // adjust speed
        });

        return () => {
            tl.kill();
        };
    }, []);

    const features = [
        {
            title: "Full-Stack Development",
            description:
                "I build complete web applications, covering both frontend and backend, ensuring smooth communication.",
            icon: coding,
        },
        {
            title: "Modern Frontend Frameworks",
            description:
                "With expertise in React, Next.js, and React Native, I deliver fast, responsive, and user-friendly applications for both web and mobile platforms.",
            icon: design,
        },
        {
            title: "Cross-Platform Mobile Apps",
            description:
                "Using Flutter and React Native, I develop high-performance apps that run seamlessly on both iOS and Android with a single codebase.",
            icon: mobile,
        },
        {
            title: "Scalable Backend Solutions",
            description:
                "I design secure, efficient, and scalable server-side architectures using Node.js, FastAPI, and databases like PostgreSQL or Firebase.",
            icon: backend,
        },
        {
            title: "Freelancing Power & Flexibility",
            description:
                "As a freelancer, I adapt quickly to client needs, manage projects independently, and deliver results on time with professional communication.",
            icon: freelance,
        },
        {
            title: "Academic & Professional Foundation",
            description:
                "With a Master’s degree (Master 2) and years of practical experience, I bring both strong theoretical knowledge and real-world skills.",
            icon: learning,
        },
    ];

    const FrameWorks = [
        "Next.js",
        "React",
        "Flutter",
        "Node.js",
        "React Native",
        "PostgreSQL",
        "GSAP",
        "Framer Motion",
        "Supabase",
        "TypeScript",
    ]

    return (
        <section className='bg-[#F2F2F2] p-10'>
            <div className='px-15 py-10 rounded-2xl bg-[#EAEAEA] flex flex-col justify-center items-center'>
                <div className='px-0.5 pr-2 py-0.5 flex flex-row justify-center items-center gap-1 rounded-full border border-black/20'>
                    <div className='bg-gradient-to-b from-[#EACB88] to-[#C08C41] px-2 py-0.5 rounded-full'><StarIcon size={17}/></div>
                    <p className='text-sm font-medium text-black'>About me</p>
                </div>

                <div className='mt-10 grid grid-cols-3 gap-6 mb-5'>
                    {
                        features.map((feature, i) => (
                            <div key={i} className='p-6 flex flex-col justify-start items-start bg-[#F2F2F2] rounded-xl shadow-md gap-1'>
                                <div className='rounded-lg flex flex-row items-center justify-center bg-[#F2F2F2] shadow-lg p-2 h-12 w-12'>
                                    <LordIcon icon={feature.icon} width={40} height={40} />
                                </div>
                                <p className='text-black text-lg font-semibold mt-4'>{feature.title}</p>
                                <p className='text-black/60 text-sm'>{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex gap-6 whitespace-nowrap mt-10"
                style={{ width: "max-content" }}
            >
                {/* repeat the list twice for infinite effect */}
                {FrameWorks.concat(FrameWorks).map((frame, i) => (
                    <div
                        key={i}
                        className="rounded-full px-4 py-1 bg-[#D9D9D9]/30 text-sm text-black/80"
                    >
                        {frame}
                    </div>
                ))}
            </div>
        </section>
    )
}