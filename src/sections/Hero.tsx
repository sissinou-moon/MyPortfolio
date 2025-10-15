"use client";

import FullPlanet from "@/components/FullPlanet";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import github from "@/assets/github.png"
import thread from "@/assets/thread.png"
import linkedin from "@/assets/linkedin.jpg"
import FloatingPoints from "@/components/FloatingPoints";

export default function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);
    const mainBarRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const mainContainer = useRef<HTMLDivElement>(null);
    const shapeContainer = useRef<HTMLCanvasElement>(null);
    const textContainer = useRef<HTMLDivElement>(null);

    const text = "Portfolio";
    const chars = text.split("");

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.5 });
        const sTl = gsap.timeline({delay: 2});
        const scrollTL = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "50% 30%",
                scrub: true,
            }
        });

        scrollTL.to(shapeContainer.current, {
            scale: 1.4,
        }, "a").to(nameRef.current, {
            y: -500,
        }, "a").to(aboutRef.current, {
            y: -500,
        }, "a").to(linksRef.current, {
            y: -500,
        }, "a");

        sTl.from(nameRef.current, {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: "power1.out",
        })
            .from(aboutRef.current, {
                y: -20,
                opacity: 0,
                duration: 1,
                ease: "power1.out",
            }, ">-=0.4") // starts when 50% of the previous animation is done
            .from(linksRef.current, {
                y: -20,
                opacity: 0,
                duration: 1,
                ease: "power1.out",
            }, ">-=0.4"); // same logic
    });

    return (
        <section ref={mainContainer} className="bg-[#F2F2F2] h-full w-screen flex flex-col justify-center items-center relative">
            {/* Planet */}
            <div ref={contentRef} className="relative md:h-screen h-full w-screen">
                <div className='md:w-full md:h-full w-full h-150'>
                    <FullPlanet containerRef={shapeContainer}/>
                </div>
                <div ref={textContainer} className='absolute inset-0 flex flex-col h-full w-full items-center justify-center z-10'>
                    <h1 ref={nameRef} className='md:text-[60px] text-[35px] text-center text-[#512E1F] font-bold tracking-wide max-w-165 md:leading-15 leading-10 mb-5'>Designing the Future<br/>One Pixel at a Time</h1>
                    <p ref={aboutRef} className='text-sm md:text-[17px] text-[#512E1F] max-w-105 text-center'>Hi, I’m Abderrahmane — a developer and entrepreneur passionate about building impactful digital solutions. With experience in full-stack development, mobile apps, and scalable backend systems</p>
                    <div ref={linksRef} className='flex flex-row max-w-60 items-center justify-center gap-3 mt-5'>
                        <img src={linkedin.src} alt='linkedin' width={17} height={17} className='rounded-sm'/>
                        <img src={thread.src} alt='linkedin' width={17} height={17}/>
                        <img src={github.src} alt='linkedin' width={17} height={17}/>
                    </div>
                </div>
                <p className='hidden md:block absolute bottom-0 left-10 text-[35px] font-bold text-[#512E1F] leading-10 mb-2'>Where Code<br/>Meets Creativity</p>
            </div>
        </section>
    );
}
