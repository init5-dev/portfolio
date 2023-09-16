import Image from 'next/image'
import StoryCard from './components/storycard'
import ContactForm from './components/contactform'
import Social from './components/social'

export default function Home() {
  return (
    <>
      <div className='w-full grid grid-cols-1 items-center justify-items-center mb-8'>
        <div className="rounded glass grid grid-cols-1 items-center justify-center p-4 w-96">
          <div className='flex justify-center'>
            <Image className="rounded-full fade-in-left-65 py-2" src="/media/Nelson-Ochagavia.jpg" width={240} height={240} />
          </div>
          <StoryCard />
        </div>
        <h2 className="text-center fade-in-left-70 mt-16">¡Contáctame!</h2>
        <ContactForm />
      </div>
    </>
  )
}
