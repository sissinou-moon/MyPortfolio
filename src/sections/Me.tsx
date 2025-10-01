"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import pfp from "@/assets/pfp.jpg"
import {StarIcon} from "@/components/StartIcon";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import check from "@/assets/icons/check.png"

gsap.registerPlugin(ScrollTrigger); // ✅ Register plugin once at top

export function Me() {

    const pricing = [
        {name: 'Starter', price: 120, description: 'For small businesses or individuals who need a simple online presence.', services: ['1 landing page (Next.js / React)', '1 simple mobile app (if needed)', 'Responsive design (mobile-friendly)', 'Basic SEO setup', 'Delivery in 14 days']},
        {name: 'Professional', price: 250, description: 'For growing businesses that need advanced features and scalability.', services: ['Multi-page website or mobile app', 'API integration (auth, payments, etc.)', 'Custom design tailored to brand', 'Performance optimization', 'Delivery in 14 days']},
        {name: 'Professional', price: 250, description: 'For growing businesses that need advanced features and scalability.', services: ['Multi-page website or mobile app']},
        {name: 'Enterprise', price: 550, description: 'For enterprises or long-term projects requiring complex solutions.', services: ['Full-stack web or mobile app', 'Dashboard / Admin panel', 'Cloud deployment & CI/CD setup', 'Advanced security & scalability', 'Ongoing support & maintenance']},
    ]


    const result = [
        [95, 'Satisfied happy clients'],
        [4, 'Years of work experience'],
        [20, 'Successful projects done'],
        [2, 'Start-ups'],
    ]

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".stat-item");

            items.forEach((item, i) => {
                const numberEl = item.querySelector(".stat-number") as HTMLElement;
                const textEl = item.querySelector(".stat-text") as HTMLElement;

                // Animate when in view
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 80%", // start when item is 80% inside viewport
                    onEnter: () => {
                        // Number counter
                        gsap.fromTo(
                            numberEl,
                            { innerText: 0 },
                            {
                                innerText: parseInt(numberEl.dataset.value || "0"),
                                duration: 2,
                                ease: "power1.out",
                                snap: { innerText: 1 },
                                delay: i * 0.3,
                            }
                        );

                        // Fade-in text
                        gsap.from(textEl, {
                            opacity: 0,
                            y: 20,
                            duration: 1,
                            ease: "power2.out",
                            delay: i * 0.3 + 0.4,
                        });
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className='flex flex-col relative h-full'>
            <div className='flex flex-row items-center gap-1 bg-[#DCB262] p-15 border border-b-black border-t-black pb-25 h-screen'>
                <img src={pfp.src} alt='pfp' className='rounded-full object-cover h-120 w-120 border-3 border-black'/>

                <div className='flex flex-col gap-2 ml-10'>
                    <div className='px-0.5 pr-2 py-0.5 flex flex-row justify-center items-center gap-1 rounded-full border border-black/20 bg-[#F2F2F2] w-27'>
                        <div className='bg-gradient-to-b from-[#EACB88] to-[#C08C41] px-2 py-0.5 rounded-full'><StarIcon size={17}/></div>
                        <p className='text-sm font-medium text-black'>My work</p>
                    </div>

                    <p className='text-black font-semibold text-3xl'>More about me</p>
                    <p className='text-black text-md max-w-140 mt-5'>Hi , i’m Abderrahmane, a passionate developer specializing in modern frontend and cross-platform technologies. My expertise lies in React and Next.js for building fast, scalable web applications, as well as React Native and Flutter for crafting high-performance mobile apps that deliver smooth user experiences across platforms.</p>
                    <p className='text-black/70 text-md max-w-140 mt-1'>I hold a Master 2 degree, which has strengthened my analytical thinking, problem-solving skills, and ability to adapt to complex technical challenges. This academic foundation supports my practical work, allowing me to merge theory with real-world application.</p>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center" ref={containerRef}>
                <div className="rounded-2xl shadow-lg flex flex-row items-center justify-center gap-5 bg-[#F2F2F2] h-35 w-115">
                    {result.map((item, index) => (
                        <div
                            key={index}
                            className="stat-item flex flex-col gap-2 items-center justify-center"
                        >
                            <p
                                className="stat-number text-2xl text-black font-semibold"
                                data-value={item[0]}
                            >
                                {item[0]}
                            </p>
                            <p className="stat-text text-sm text-black/70 text-center max-w-23">
                                {item[1]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col bg-[#F2F2F2] items-center justify-center px-15 py-50 h-screen'>
                <div className='relative bg-[#F2F2F2] rounded-2xl shadow-lg flex flex-row mt-25'>
                    {
                        pricing.map((item, index) => (
                            <>
                                {
                                    index !== 1 ? (
                                        <div className={index === 2 ? "flex flex-col gap-1 p-10 opacity-0 max-w-70" : 'flex flex-col gap-1 p-10'}>
                                            <p className='text-3xl font-semibold text-black'>${item.price}</p>
                                            <p className='text-lg font-medium text-black mt-7'>{item.name}</p>
                                            <p className='text-sm font-light text-black mb-10 max-w-60'>{item.description}</p>
                                            {
                                                item.services.map((service, index) => (
                                                    <div className='flex flex-row gap-3 items-center'>
                                                        <img src={check.src} alt='check' className='h-3 w-3'/>
                                                        <p className='text-black/70 font-light text-sm'>{service}</p>
                                                    </div>
                                                ))
                                            }
                                            <div className='flex flex-row border border-[#804915]/30 bg-[#EACB88] text-black font-medium rounded-full items-center justify-center py-2 mt-10'>Get Started!</div>
                                        </div>
                                    ) : <div className="absolute inset-0 z-10 flex items-center justify-center mb-15">
                                        <div className="flex flex-col gap-1 p-10 bg-gradient-to-b from-[#DCB262] to-[#B37C32] rounded-2xl shadow-lg">
                                            <p className="text-3xl font-semibold text-white">${item.price}</p>
                                            <p className="text-lg font-medium text-white mt-7">{item.name}</p>
                                            <p className="text-sm font-light text-white mb-10 max-w-60">{item.description}</p>

                                            {item.services.map((service, idx) => (
                                                <div key={idx} className="flex flex-row gap-3 items-center">
                                                    <img src={check.src} alt="check" className="h-3 w-3" />
                                                    <p className="text-white/70 font-light text-sm">{service}</p>
                                                </div>
                                            ))}

                                            <div className="flex flex-row border border-[#804915]/50 bg-[#F2F2F2] text-black font-medium rounded-full items-center justify-center py-2 mt-10 max-w-60">
                                                Get Started!
                                            </div>
                                        </div>
                                    </div>

                                }
                            </>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}