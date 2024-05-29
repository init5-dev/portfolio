import Image from 'next/image'
import StoryCard from './components/storycard'
import ContactForm from './components/contactform'
import Social from './components/social'

export default function Home() {
  return (
    <div className='sm:w-full sm:mx-2 md:w-full lg:w-1/2'>
      <StoryCard />
      <h2 className="text-center w-full fade-in-left-70 mt-14 fade-in-left-70">Contact me!</h2>
      <ContactForm />
    </div>
  )
}
