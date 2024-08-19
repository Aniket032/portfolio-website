import Link from 'next/link'
import CanvasAnimation from '../components/canvasAnimation'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aniket Chawla',
  description: 'Aniket is a full-stack developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`
          ${inter.className /*bg-gray-50 text-gray-950*/}

          relative bg-gray-50 pt-28 text-gray-950

          dark:bg-zinc-950 dark:text-[#dddd] dark:text-opacity-90

          dark:[&::-webkit-scrollbar]:bg-zinc-950

          sm:pt-36
        `}
      >
        <ThemeContextProvider>
          <CanvasAnimation />
          {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] righ-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div> */}
          <div></div>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
