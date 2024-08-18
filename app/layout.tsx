import Link from 'next/link'
import CanvasAnimation from '../components/canvasAnimation'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aniket Chawla',
  description: 'Aniket is a full-stack developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className /*bg-gray-50 text-gray-950*/}

          relative bg-gray-50 pt-28 text-gray-950

          sm:pt-36
        `}
      >
        <CanvasAnimation />
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] righ-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div> */}
        <div></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
