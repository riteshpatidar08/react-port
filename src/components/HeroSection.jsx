import React from 'react'
import avatar from './../assets/avatar.jpg'
function HeroSection() {
  return (
    <div className='min-h-screen rounded-lg bg-secondary m-10 flex justify-around items-center'>
      <div className='flex-1 p-20' >
        <img className='w-96 rounded-full' src={avatar} alt='logo'/>
      </div>
      <div className='flex-1 flex flex-col gap-4'>
         <h1 className='text-4xl text-white font-bold'>Hello 👋 I'm <span className='text-primary font-bold text-6xl ml-2 font-dynalight'>Ritesh</span></h1>
         <h2 className='text-6xl font-bold text-primary font-dynalight'>Mern Stack Developer</h2>

      </div>
    </div>
  )
}

export default HeroSection
