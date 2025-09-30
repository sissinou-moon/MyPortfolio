import portfolio from "@/assets/portfolio.png"

export default function Header() {
    return (
        <header className="z-20 absolute top-5 w-full flex flex-row justify-between items-center bg-transparent px-15 py-5">
            <img
                src={portfolio.src}
                alt="logo"
                width={200}
                className="object-contain"
            />
            <div className="flex flex-row gap-4">
                <a href="#" className="text-sm text-[#512E1F]">
                    About
                </a>
                <a href="#" className="text-sm text-[#512E1F]">
                    Experiences
                </a>
                <a href="#" className="text-sm text-[#512E1F]">
                    Projects
                </a>
                <a href="#" className="text-sm text-[#512E1F]">
                    Contact
                </a>
            </div>
        </header>

    )
}