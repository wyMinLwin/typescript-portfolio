import React from 'react'
import {FaMobileAlt } from 'react-icons/fa'
import {SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiReact, SiRedux, SiSass, SiTailwindcss, SiTypescript, SiUbuntu} from 'react-icons/si'
import SkillTextAndIcon from './SkillTextAndIcon'

const SkillsContainer = () => {
  return (
   <>
      <SkillTextAndIcon label={'html'}>
        <SiHtml5 size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'css'}>
        <SiCss3 size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'bootstrap'}>
        <SiBootstrap size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'tailwind'}>
        <SiTailwindcss size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'sass'}>
        <SiSass size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'javascript'}>
        <SiJavascript size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'typescript'}>
        <SiTypescript size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'react'}>
        <SiReact size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'react native'}>
        <FaMobileAlt size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'redux'}>
        <SiRedux size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'ubuntu Os'}>
        <SiUbuntu size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'github'}>
        <SiGithub size={26} className='text-white hover:text-comic-red transition ease-in-out' />
      </SkillTextAndIcon>
   
   </>
  )
}

export default SkillsContainer