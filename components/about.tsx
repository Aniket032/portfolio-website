/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      className={`
        mb-28 max-w-[45rem] scroll-mt-28 text-center

        leading-8

        sm:mb-40
      `}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.25, duration: 1 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a final year student pursuing my B.Tech in{' '}
        <span className="font-medium">Computer Science and Engineering</span> from Vellore Institute
        of Technology. I am an aspiring{' '}
        <span className="font-medium">full-stack web developer</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{' '}
        <span className="font-medium">React, Next.js, Node.js</span>. I am also familiar with
        TypeScript. I am always looking to learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching
        movies, badminton and playing guitar. I also enjoy{' '}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  )
}

export default About
