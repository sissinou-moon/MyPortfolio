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
        const sTl = gsap.timeline({ delay: 6 });
        const scrollTL = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "50% 50%",
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

        if (textRef.current) {
            const letters = textRef.current.querySelectorAll("span");
            const lines = paragraphRef.current?.querySelectorAll("span")!;

            tl.fromTo(
                letters,
                { x: 10, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power4.out",
                }
            ).add(animationProgress(), "<").add(
                tl.fromTo(
                    lines,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        stagger: 0.7,
                        ease: "power3.out",
                    },
                    "-=3"
                )
            ).to(letters, {
                    x: '-100%',
                    opacity: 0,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power4.inout",
                }, "-=0.5"
            ).to(lines, {
                y: '-100%',
                opacity: 0,
                stagger: 0.4,
                duration: 1,
                ease: "power4.inout",
            }, "<").to(mainBarRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
            }, "-=0.25").to(maskRef.current, {
                clipPath: "circle(0% at center)", // shrink to reveal background
                duration: 1.5,
                ease: "power3.inOut",
            }, "<");
        }
    });

    const animationProgress = (duration = 4) => {
        const tl = gsap.timeline();
        const counterSteps = 5;
        let currentProgress = 0;

        for (let i = 0; i < counterSteps; i++) {
            const finalStep = i === counterSteps - 1;
            const targetProgress = finalStep
                ? 1
                : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
            currentProgress = targetProgress;

            tl.to(barRef.current, {
                scaleX: targetProgress,
                duration: duration / counterSteps,
                stagger: 0.05,
                ease: "power2.out",
            });
        }

        return tl;
    };

    return (
        <section ref={mainContainer} className="bg-[#F2F2F2] h-full w-screen flex flex-col justify-center items-center relative">
            <div ref={maskRef} className="absolute z-30 flex flex-col justify-center items-center bg-[#171717] h-screen w-screen" style={{ clipPath: "circle(100% at center)" }}>
                {/* Outer progress container */}
                <div ref={mainBarRef} className="bg-black/50 rounded-[60px] h-40 w-130 relative flex items-center justify-center overflow-hidden mt-60">
                    {/* White expanding bar */}
                    <div
                        ref={barRef}
                        className="absolute left-0 h-50 w-full bg-white origin-left scale-x-0"
                    ></div>

                    {/* Text with blend mode */}
                    <h1
                        ref={textRef}
                        className="absolute z-20 font-semibold text-[40px] flex gap-1 mix-blend-difference"
                    >
                        {chars.map((char, i) => (
                            <span key={i} className="inline-block opacity-0">
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Paragraph text (line by line animation) */}
                <div
                    ref={paragraphRef}
                    className="flex flex-col justify-center items-center text-center h-30 text-white font-light text-sm mt-50"
                >
                    <span>Spaces unfold in light and shadow, where structure finds its</span>
                    <span>quiet rhythm, and time align in harmony</span>
                </div>
            </div>

            {/* Planet */}
            <div ref={contentRef} className="relative h-screen w-screen">
                <FullPlanet containerRef={shapeContainer}/>
                <FloatingPoints /> {/* 🌟 Add floating dots here */}
                <div ref={textContainer} className='absolute inset-0 flex flex-col h-full w-full items-center justify-center z-10'>
                    <h1 ref={nameRef} className='text-[65px] text-center text-[#512E1F] tracking-wide max-w-150 leading-15 mb-5'>Designing the Future<br/>One Pixel at a Time</h1>
                    <p ref={aboutRef} className='text-sm font-light text-[#512E1F] max-w-105 text-center'>Hi, I’m Abderrahmane — a developer and entrepreneur passionate about building impactful digital solutions. With experience in full-stack development, mobile apps, and scalable backend systems</p>
                    <div ref={linksRef} className='flex flex-row max-w-60 items-center justify-center gap-3 mt-5'>
                        <img src={linkedin.src} alt='linkedin' width={17} height={17} className='rounded-sm'/>
                        <img src={thread.src} alt='linkedin' width={17} height={17}/>
                        <img src={github.src} alt='linkedin' width={17} height={17}/>
                    </div>
                </div>
                <p className='absolute bottom-0 left-10 text-[35px] font-bold text-[#512E1F] leading-10 mb-2'>Where Code<br/>Meets Creativity</p>
            </div>
        </section>
    );
}
