import React from 'react'
import { SiFacebook, SiGithub, SiInstagram, SiTelegram } from 'react-icons/si'

const SocialMediaIcons = () => {
  return (
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
  )
}

export default SocialMediaIcons