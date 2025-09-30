import {StarIcon} from "@/components/StartIcon";
import carewise from "@/assets/11.png"
import crypto from "@/assets/22.png"
import nubien from "@/assets/33.png"
import jobify from "@/assets/44.png"
import arrow from "@/assets/icons/arrow.png"

export default function MyWork() {

    const works = [
        {
            title: "Snowlake Social Media Website",
            description: 'Snowlake is a sleek, product-driven site for a social media platform, built with clean UI and scalable Framer CMS.',
            cover: nubien,
            link: '',
        },
        {
            title: "Snowlake Social Media Website",
            description: 'Snowlake is a sleek, product-driven site for a social media platform, built with clean UI and scalable Framer CMS.',
            cover: jobify,
            link: '',
        },
        {
            title: "Snowlake Social Media Website",
            description: 'Snowlake is a sleek, product-driven site for a social media platform, built with clean UI and scalable Framer CMS.',
            cover: carewise,
            link: '',
        },
        {
            title: "Snowlake Social Media Website",
            description: 'Snowlake is a sleek, product-driven site for a social media platform, built with clean UI and scalable Framer CMS.',
            cover: crypto,
            link: '',
        }
    ]

    return (
        <section className='bg-[#F2F2F2] flex flex-col justify-center items-center px-15 py-10'>
            <div className='px-0.5 pr-2 py-0.5 flex flex-row justify-center items-center gap-1 rounded-full border border-black/20'>
                <div className='bg-gradient-to-b from-[#EACB88] to-[#C08C41] px-2 py-0.5 rounded-full'><StarIcon size={17}/></div>
                <p className='text-sm font-medium text-black'>My work</p>
            </div>

            <p className='text-black font-semibold text-3xl text-center max-w-120 mt-5'>Check out some of our awesome projects with creative ideas.</p>

            <div className='grid grid-cols-2 gap-5 mt-10'>
                {
                    works.map((work, i) => (
                        <div className='flex flex-col items-start' key={i}>
                            <img src={work.cover.src} alt={work.title}/>
                            <p className='text-black font-medium text-xl mt-4'>{work.title}</p>
                            <p className='text-black/70 font-light text-md max-w-120 mt-2'>{work.description}</p>
                            <div className='flex flex-row items-center gap-1 cursor-pointer'>
                                <p className='text-black/70 font-bold text-sm max-w-120 mt-7 mb-2'>View The Case Study</p>
                                <img src={arrow.src} alt='arrow' className='h-2 w-2'/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}