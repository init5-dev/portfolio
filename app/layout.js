import './globals.css'
import Navbar from './components/navbar/navbar.js'
import Head from 'next/head'
import Background from './components/background.js'

export const metadata = {
  title: 'Init5Dev',
  description: 'Portfolio de Nelson Ochagavía - Desarrollador web full-stack',
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['nelson.ochagavia@gmail.com', 'https://init5-dev.netlify.app'],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/media/favicon.ico" />
      </Head>
      <body>
        <Background />
        <Navbar />
        <main className="flex w-screen min-h-screen flex-col items-center justify-between py-8 sm:px-4 md:px-4 lg:px-16 pb-8">
          {children}
        </main>
        <p className='text-center text-xs italic fade-in-left-90 mb-4'>Desarrollado con Next.js</p>
      </body>
    </html>
  )
}
