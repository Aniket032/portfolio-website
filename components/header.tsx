'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className={`
          fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white
          border-opacity-40 bg-white bg-opacity-90 shadow-lg shadow-black/[0.03]
          backdrop-blur-[0.5rem]

          dark:border-black/40 dark:bg-transparent

          sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
        `}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.25 }}
      ></motion.div>
      <nav
        className={`
        fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2

        sm:top-[1.7rem] sm:h-[initial] sm:py-0
      `}
      >
        <ul
          className={`
            flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium
            text-gray-500

            dark:text-[#dddd]

            sm:w-[initial]

            sm:flex-nowrap sm:gap-5
          `}
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex h-3/4 items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                className={`
                  flex w-full items-center justify-center px-3 py-3 transition

                  dark:hover:text-gray-50

                  hover:text-gray-950
                `}
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
