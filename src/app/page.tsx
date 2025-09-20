import Image from "next/image";
import Hero from "@/sections/Hero";
import Header from "@/sections/Header";
import Experiences from "@/sections/Experiences";

export default function Home() {
  return (
    <div className='relative w-screen overflow-x-hidden'>
        <Header/>
        <Hero/>
        <Experiences/>
    </div>
  );
}
