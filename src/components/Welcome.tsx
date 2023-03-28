import React, { useState } from 'react'
import BlurContainer from './BlurContainer'
import Mail from './Mail';
import ModelContainer from './ModelContainer'
import ModelOverlay from './ModelOverlay';

const Welcome = () => {
  const [openModel,setOpenModel] = useState(false);


  return (
    <>
        <BlurContainer notClickable={true} >
            <p className='font-bold text-3xl'> Need someone to bring your design into code?</p>
            <button 
            onClick={() => setOpenModel(prev => prev = true)}
            className='rounded-l-full mt-2 rounded-r-full bg-comic-red hover:bg-comic-red/80 active:bg-comic-red p-1 px-2 text-base font-bold'
            >
                Work with me🤝
            </button>
        </BlurContainer>
        <ModelOverlay openModal={openModel} setOpenModel={() => setOpenModel(prev => prev = false)}>
            <div className='p-3 my-auto h-fit grid grid-cols-1'>
              <p className='font-normal sm:font-semibold text-sm sm:text-lg'>I am a currently working as a front-end developer for start-up company based on Yangon.</p>
              <p className='font-normal sm:font-semibold text-sm sm:text-lg'> Or if you wanna give me a project for both commission or volunteering </p> 
              <p className='font-normal sm:font-semibold text-sm sm:text-lg'> you can directly contact to my email or send message from the form I provided you below.</p>
              
                <p className='italic font-normal underline hover:text-comic-blue' onClick={() => window.location.href = `mailto:${'waiyanminlwin421@gmail.com'}`}>
                  Direct to my Gmail
                </p>
              
              <Mail />
            </div>
        </ModelOverlay>   
    </>
  )
}

export default Welcome