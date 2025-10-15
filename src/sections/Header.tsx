import portfolio from "@/assets/portfolio.png"

export default function Header() {
    return (
        <header className="z-20 absolute top-5 w-full flex flex-row justify-between items-center bg-transparent md:px-15 px-8 py-5">
            <img
                src={portfolio.src}
                alt="logo"
                className="object-contain md:w-50 w-20"
            />
            <div className="flex flex-row gap-4 md:text-sm text-[10px]">
                <a href="#about" className=" text-[#512E1F]">
                    About
                </a>
                <a href="#testimonials" className=" text-[#512E1F]">
                    Testimonials
                </a>
                <a href="#projects" className=" text-[#512E1F]">
                    Projects
                </a>
                <a href="#contact" className=" text-[#512E1F]">
                    Contact
                </a>
            </div>
        </header>

    )
}