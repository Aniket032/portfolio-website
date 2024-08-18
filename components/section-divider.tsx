'use client'
import React from 'react'
import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <motion.div
      className={`
        my-24 hidden h-16 w-1 rounded-full bg-gray-200

        sm:block
      `}
    ></motion.div>
  )
}

export default SectionDivider
