/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import React from 'react'
import PP from '../public/PP.jpeg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.75 }}
          >
            <Image
              src={PP}
              alt="profilePic"
              className="h-23 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 0.85, stiffness: 155 }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="font-bold">Hello, I'm Aniket.</span> I'm a{' '}
        <span className="font-bold">full-stack developer. </span>I enjoy building{' '}
        <span className="italic">sites & apps</span> and have experience in building great Website
        applications with{' '}
        <span className="underline">
          React.js/ Next.js / Nodejs / and its libraries and frameworks.
        </span>
      </motion.h1>

      <motion.div
        className={`
        flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium

        sm:flex-row
      `}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link
          href="#contact"
          className={`group
            flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none

            transition

            focus:scale-110 hover:scale-110

            hover:bg-gray-950
          `}
        >
          Contact me here{' '}
          <BsArrowRight
            className={`
              opacity-70

              transition

              group-hover:translate-x-1
            `}
          />
        </Link>
        <a
          className={`
            group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3
            outline-none transition

            focus:scale-110

            hover:scale-110
          `}
          href="https://drive.google.com/file/d/1Lo5zmeQaUyzbofaJPmFfNYBkCVCq6hE7/view?usp=drive_link"
          target="_blank"
        >
          Download Resume{' '}
          <HiDownload
            className={`
            opacity-60

            transition

            group-hover:translate-y-1
          `}
          />
        </a>
        <a
          className={`
          flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700
          outline-none transition

          focus:scale-[1.15] focus:text-gray-950

          hover:scale-[1.15] hover:text-gray-950
        `}
          href="https://www.linkedin.com/in/aniketchawla"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className={`
            flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700
            outline-none transition

            focus:scale-[1.15] focus:text-gray-950

            hover:scale-[1.15] hover:text-gray-950
          `}
          href="https://github.com/Aniket032"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
