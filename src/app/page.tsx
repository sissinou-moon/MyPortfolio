import Image from "next/image";
import Hero from "@/sections/Hero";
import Header from "@/sections/Header";
import AboutMe from "@/sections/AboutMe";
import Reviews from "@/sections/Reviews";
import MyWork from "@/sections/MyWork";
import {Me} from "@/sections/Me";

export default function Home() {
  return (
    <div className='relative w-screen overflow-x-hidden'>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Reviews/>
        <MyWork/>
        <Me/>
    </div>
  );
}
