import StoryCard from "./storycard";
import ContactForm from "./contactform";
import Image from "next/image";
import Test from './test'

export default function HomeComp() {

    return (
        <div className='grid grid-cols-1 lg:w-1/2 md:w-3/4 sm:w-3/4 items-center justify-items-center'>
            <Test />
            <Image className="rounded-full fade-in-left-65" src="/media/Nelson Ochagavía.jpg" width={240} height={240} />
            <StoryCard />
                <h2 className="text-center fade-in-left-70">¡Contáctame!</h2>
                <ContactForm />
                <p className='mt-16 mb-4w-full text-center italic fade-in-left-90'>Desarrollado con Next.js y Tailwindcss © 2023</p>
        </div>
    )
}