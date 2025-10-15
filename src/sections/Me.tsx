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
        {name: 'Professional', price: 250, description: 'For growing businesses that need advanced features and scalability.', services: ['Multi-page website or mobile app', 'API integration (auth, payments, etc.)', 'Custom design tailored to brand', 'Performance optimization', 'Delivery in 14 days']},
        {name: 'Enterprise', price: 550, description: 'For enterprises or long-term projects requiring complex solutions.', services: ['Full-stack web or mobile app', 'Dashboard / Admin panel', 'Cloud deployment & CI/CD setup', 'Advanced security & scalability', 'Ongoing support & maintenance']},
    ]


    const result = [
        [95, 'Satisfied happy clients'],
        [4, 'Years of work experience'],
        [20, 'Successful projects done'],
        [2, 'Start-ups projects'],
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
        <section  className='flex flex-col relative h-full bg-[#F2F2F2]'>
            <div className='flex md:flex-row flex-col items-center justify-centers gap-1 bg-[#DCB262] lg:p-15 py-5 px-8 border border-b-black border-t-black pb-25 md:h-screen h-full'>
                <img src={pfp.src} alt='pfp' className='rounded-full object-cover lg:h-120 lg:w-120 md:h-100 h-80 w-100 border-3 border-black mb-5 md:mb-0'/>

                <div className='flex flex-col gap-2 md:ml-10'>
                    <div className='px-0.5 pr-2 py-0.5 flex flex-row justify-center items-center gap-1 rounded-full border border-black/20 bg-[#F2F2F2] w-27'>
                        <div className='bg-gradient-to-b from-[#EACB88] to-[#C08C41] px-2 py-0.5 rounded-full'><StarIcon size={17}/></div>
                        <p className='text-sm font-medium text-black'>My work</p>
                    </div>

                    <p className='text-black font-semibold text-3xl'>More about me</p>
                    <p className='text-black text-md max-w-140 mt-5'>Hi , i’m Abderrahmane, a passionate developer specializing in modern frontend and cross-platform technologies. My expertise lies in React and Next.js for building fast, scalable web applications, as well as React Native and Flutter for crafting high-performance mobile apps that deliver smooth user experiences across platforms.</p>
                    <p className='text-black/70 text-md max-w-140 mt-1 hidden md:block'>I hold a Master 2 degree, which has strengthened my analytical thinking, problem-solving skills, and ability to adapt to complex technical challenges. This academic foundation supports my practical work, allowing me to merge theory with real-world application.</p>
                </div>
            </div>

            <div className="hidden absolute inset-0 md:flex items-center justify-center" ref={containerRef}>
                <div className="rounded-2xl shadow-lg flex flex-row items-center justify-center gap-5 bg-[#F2F2F2] md:h-35 md:w-115 h-30 w-85">
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
                            <p className="stat-text md:text-sm text-xs text-black/70 text-center max-w-23">
                                {item[1]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div id='contact' className='flex flex-col bg-[#F2F2F2] items-center justify-center lg:px-15 px-8 md:py-50 py-10 md:h-screen h-full'>
                <div className='relative bg-[#F2F2F2] rounded-2xl shadow-lg sm:grid sm:grid-cols-3 md:flex md:flex-row md:mt-25 px-10 py-10 gap-5'>
                    {
                        pricing.map((item, index) => (
                            <div key={index}>
                                {
                                    index !== 1 ? (
                                            <div className={`flex flex-col justify-between h-full lg:p-10 md:mt-0 ${index !== 0 ? 'mt-10' : 'mt-0'} `}>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-3xl font-semibold text-black">${item.price}</p>
                                                <p className="text-lg font-medium text-black mt-7">{item.name}</p>
                                                <p className="text-sm font-light text-black mb-10 max-w-60">{item.description}</p>

                                                {item.services.map((service, i) => (
                                                    <div key={i} className="flex flex-row gap-3 items-center">
                                                        <img src={check.src} alt="check" className="h-3 w-3" />
                                                        <p className="text-black/70 text-xs lg:text-sm">{service}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-row border border-[#804915]/30 bg-[#EACB88] text-black font-medium rounded-full items-center justify-center py-2 mt-10 cursor-pointer transition-all ease-in-out duration-500 hover:scale-103">
                                                Get Started!
                                            </div>
                                        </div>
                                    ) : <div className="hidden absolute inset-0 z-10 items-center justify-center mb-15">
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

                                            <div className="flex flex-row border border-[#804915]/50 bg-[#F2F2F2] text-black font-medium rounded-full items-center justify-center py-2 mt-10 max-w-60 cursor-pointer transition-all ease-in-out duration-500 hover:scale-103">
                                                Get Started!
                                            </div>
                                        </div>
                                    </div>

                                }
                            </div>
                        ))
                    }
                </div>

                <div className='bg-[#F2F2F2] w-screen  flex flex-row items-center justify-center text-sm font-light text-black mt-5 pt-10 pb-10'>
                    <p>@Copyright-2025 Abderrahmane</p>
                </div>

            </div>
        </section>
    )
}