import React, { useState } from 'react'
import WYML from '../assets/wyml.jpeg'
import YGN from '../assets/yangon.png'
import BlurContainer from './BlurContainer'
import ModelOverlay from './ModelOverlay'
import SocialMediaIcons from './SocialMediaIcons'

const Profile = () => {
  const [nameModel,setNameModel] = useState(false)
  const [socialModel,setSocialModel] = useState(false)
  return (
    <>
    <div className='grid lg:grid-cols-2 gap-2'>
      <BlurContainer setOpenModel={() => setNameModel(prev => prev = true)}>
        <div className='flex flex-row justify-between items-center' >
          <div className='font-light text-lg'>Name:</div>
          <div className='font-semibold text-lg text-white hover:text-comic-red transition ease-in-out'>Wai Yan Min Lwin</div>
        </div>
      </BlurContainer>
      <ModelOverlay openModal={nameModel} setOpenModel={() => setNameModel(prev => prev = false)}>
        <div className='p-3 my-auto h-fit grid grid-cols-1'>
          <div className='p-1 mx-auto font-semibold text-xl'>
            Wai Yan Min Lwin
          </div>
          <p className='font-light text-base mx-auto italic'>pronunciation</p>
          <div className='p-1 mx-auto text-lg'>
            <span>English: </span><span>/ Waiyān Mín Lwīn /</span>
          </div>
          <div className='p-1 mx-auto text-lg'>
            <span>Burmese: </span><span>/ ဝေယံမင်းလွင် /</span>
          </div>
        </div>
      </ModelOverlay>
      
      <BlurContainer setOpenModel={() => setSocialModel(prev => prev = true)}>
        <SocialMediaIcons />
      </BlurContainer>
      <ModelOverlay openModal={socialModel} setOpenModel={() => setSocialModel(prev => prev = false)}>
        <div className='p-3 my-auto h-fit grid grid-cols-1'>
          <SocialMediaIcons />
          <p className='mt-3 text-center p-1 font-semibold text-lg'>Those are my social media accounts where you can also follow me up.</p>
        </div>
      </ModelOverlay>
    </div>
    <div className='grid lg:grid-cols-2 gap-2'>
        <img className='w-full mt-auto p-1 rounded-3xl' src={WYML} alt='waiyan_thestarboy_minlwin' />
        <div className='flex flex-col'>
          
          <BlurContainer notClickable={true} className='h-full'>
            <div className='flex flex-row justify-between items-center'>
              <div className='font-light text-lg'>Location:</div>
              <div className='font-semibold text-lg text-white hover:text-comic-red transition ease-in-out'>Yangon, Myanmar</div>   
           </div>
           <img className='w-full pt-8' src={YGN} alt='yangon' />
          </BlurContainer>
          
        </div>
    </div>
    </>
  )
}

export default Profile