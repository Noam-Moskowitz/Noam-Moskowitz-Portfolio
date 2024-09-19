import React from 'react'
import Ripple from "@/components/magicui/ripple";

const HeroImage = () => {
  return (
    <div className="relative flex h-[500px]  w-[50%] flex-col items-center justify-center overflow-hidden rounded-lg   ">
      <img className='rounded-full h-[400px]' src="../src/images/heroImage.jpeg" alt="" />
      <Ripple mainCircleSize={460} numCircles={4}/>
    </div>
  )
}

export default HeroImage
