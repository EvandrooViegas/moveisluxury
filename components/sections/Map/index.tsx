import SectionContainer from '@/components/SectionContainer'
import React from 'react'
import GoogleMaps from '../Reviews/GoogleMaps'
import Marquee from 'react-fast-marquee'
import AnimateElement from '@/components/AnimateElement'
import data from '@/data'

export default function Map() {
  return (
    <SectionContainer id="map" className="space-y-4 ">
        <div className="flex flex-col gap-4 text-center">
        <AnimateElement element="span"  className="font-bold text-neutral-400 ">ENCONTRE-NOS EM {data.location[0].toUpperCase()}</AnimateElement>
        <AnimateElement element="span" className="font-bold text-black text-6xl">ENCONTRE-NOS</AnimateElement>
      </div>
      <AnimateElement animate={{ y: [60, 0], opacity: [0, 1], transition: { duration: 1 } }}>
        <GoogleMaps />

      </AnimateElement>
      <AnimateElement>

        <Marquee className='text-6xl font-black overflow-y-hidden uppercase'>
{` VISITE-NOS | ${data.location[0]} | ${data.number} | ${data.email} | `} 

</Marquee>
      </AnimateElement>
    </SectionContainer>
  )
}
