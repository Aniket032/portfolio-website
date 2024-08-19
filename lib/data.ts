import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import Airport from '@/public/Airport.png'
import EasyBank from '@/public/EasyBank.png'
import Iphone from '@/public/Iphone.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#home',
  },
] as const

export const experiencesData = [
  {
    title: 'IEEE CS, Student Chapter',
    location: 'Senior Core Member / Full Stack Developer',
    description:
      'Collaborated as an active team member in several projects within the chapter, contributing to the successful execution of diverse technical initiatives. Mentored 100+ junior members during the onboarding , providing guidance and helping them explore suitable career paths and fields of interest.',
    icon: React.createElement(LuGraduationCap),
    date: 'Oct. 2021 - Present',
  },
  {
    title: 'InfoEdge India',
    location: 'SDE Intern',
    description:
      'Designed and developed a user-friendly front-facing dashboard, reducing backend/frontend dependencies for A/B experiments used Next.js, Typescript, Tailwindcss.',
    icon: React.createElement(FaReact),
    date: 'Sept. 2023 - December 2023',
  },
] as const

export const projectsData = [
  {
    title: 'Iphone Landing Page',
    description:
      'Experience the cutting-edge design and advanced features of the iPhone 15 Pro on a stunning landing page crafted with precision. ',
    tags: ['React', 'Tailwind', 'gsap', 'Three.js'],
    imageUrl: Iphone,
    url: 'https://github.com/Aniket032/Iphone15Pro_landing',
  },
  {
    title: 'MIS of Kalaburagi Airport',
    description:
      'The app features real-time task tracking, progress monitoring for department admins and the Airport Director.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'TypeORM'],
    imageUrl: Airport,
    url: 'https://drive.google.com/file/d/177TGmq-lph8iJ1yoYWa6m7W7b_f9WSLl/view',
  },
  {
    title: 'Easybank Landing Page',
    description:
      'Developed a fully responsive website from scratch meeting all project requirements and design specifications.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    imageUrl: EasyBank,
    url: 'https://github.com/Aniket032/Landing-page-Easybank',
  },
]

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Express',
  'PostgreSQL',
  'Python',
  'gsap',
  'Framer Motion',
  'Linux',
] as const
