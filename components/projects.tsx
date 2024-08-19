'use client'
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useScroll, motion, useTransform } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="mb-28 scroll-mt-28 text-center">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} index={index} />
        ))}
      </div>
    </section>
  )
}

type ProjectProps = {
  title: string
  description: string
  tags: string[]
  imageUrl: StaticImageData
  index: number
  url: string
}

export default Projects

function Project({ title, description, tags, imageUrl, index, url }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      className={`
        group

        mb-3

        last:mb-0

        sm:mb-8
      `}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section
        className={`
          relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100

          dark:bg-white/5

          dark:hover:bg-white/10 group-even:pl-8

          hover:bg-gray-200

          sm:pr-8
        `}
      >
        <Link href={url} target="_blank">
          <div
            className={`
              flex h-full flex-col px-5 pb-7 pt-4

              sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]
            `}
          >
            <h3 className="text-2xl font-semibold dark:text-white/85">{title}</h3>
            <p className={`mt-2 pb-10 leading-relaxed text-gray-700 dark:text-white/70`}>
              {description}
            </p>
            <ul className="mt-4 mt-auto flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <li
                  className={`
              rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider
              text-white
			  `}
                  key={i}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className={`
              absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition

              group-even:-left-52

              group-even:right-[initial] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2 group-hover:-translate-x-3

              group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
              sm:block

              ${index === 1 ? 'w-[31.5rem]' : ''}
			${index === 2 ? '-right-[12rem] w-[30.5rem]' : ''}`}
          />
        </Link>
      </section>
    </motion.div>
  )
}
