import data from '@/data'
import React from 'react'

export default function Logo() {
  if(data.icon) {
    return <div className='flex items-center gap-2 text-2xl md:text-3xl font-black'>
      <span>{data.icon}</span>
      <span className='hidden md:inline text-xl'>{data.name}</span>
    </div> 
  } 
  return (
    <span className="font-black text-xl md:text-3xl">{data.name}</span>
  )
}
