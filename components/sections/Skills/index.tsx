
import SectionContainer from '@/components/SectionContainer'
import React from 'react'

import AnimateElement from '@/components/AnimateElement'
import data from '@/data'
const skills = data.skills
export default function Skills() {
  return (
    <SectionContainer id='skills' className='responsive bg-foreground'> 
        {skills.map((s, idx) => (
            <AnimateElement
            animate={{ opacity: [0, 1], y: [-40, 0], transition: { duration: idx * 0.1 + 0.5, type: "just" } }}
            key={s.title} className='space-y-6 bg-background p-6 '>
                <span className='text-4xl text-primary'>{s.icon}</span>
                <span className='font-black text-2xl'>{s.title}</span>
                <p className='font-red text-neutral-900'>{s.description}</p>
            </AnimateElement>
        ))}
    </SectionContainer>
  )
}
