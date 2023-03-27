import React from 'react'
import WYML from '../assets/wyml.jpeg'
import YGN from '../assets/yangon.png'
import { SiFacebook, SiGithub, SiInstagram, SiTelegram } from 'react-icons/si'


import BlurContainer from './BlurContainer'
import { FaFacebookSquare } from 'react-icons/fa'

const Profile = () => {
  return (
    <>
    <div className='grid lg:grid-cols-2 gap-2' onClick={() => console.log('-----')}>
      <BlurContainer>
        <div className='flex flex-row justify-between items-center' >
          <div className='font-light text-lg'>Name:</div>
          <div className='font-semibold text-lg text-white hover:text-comic-red transition ease-in-out'>Wai Yan Min Lwin</div>
        </div>
      </BlurContainer>
      <BlurContainer>
        <div className='flex flex-row justify-evenly'>
          <a href='https://www.facebook.com/waiyan.minlwin.161/'>
          <SiFacebook size={30} className='text-white hover:text-comic-red transition ease-in-out' />
          </a>
          <a href='https://www.instagram.com/wymin_lwin/'>
          <SiInstagram size={30} className='text-white hover:text-comic-red transition ease-in-out' />
          </a>
          <a href='https://github.com/wyMinLwin/'>
          <SiGithub size={30} className='text-white hover:text-comic-red transition ease-in-out' />
          </a>
          <a href='https:\\www.t.me/@wyMin_Lwin'>
          <SiTelegram size={30} className='text-white hover:text-comic-red transition ease-in-out' />
          </a>
        </div>
      </BlurContainer>
    </div>
    <div className='grid lg:grid-cols-2 gap-2'>
        <img className='w-full mt-auto p-1 rounded-3xl' src={WYML} alt='waiyan_thestarboy_minlwin' />
        <div className='flex flex-col'>
          
          <BlurContainer className='h-full'>
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