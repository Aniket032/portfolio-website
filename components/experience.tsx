'use client'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data'
import { useTheme } from '@/context/theme-context'

const Experience = () => {
  const { theme } = useTheme()
  return (
    <section id="experience" className="mb-28">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgb(255 255 255 / 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgb(255,255,255,0.3)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(255,255,255,0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize dark:text-white/85">{item.title}</h3>
              <p className="!mt-0 font-normal dark:text-white/85">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience
