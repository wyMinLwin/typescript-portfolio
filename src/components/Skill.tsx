import React from 'react'
import {FaMobileAlt } from 'react-icons/fa'
import {SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiReact, SiRedux, SiSass, SiTailwindcss, SiTypescript, SiUbuntu} from 'react-icons/si'
import BlurContainer from './BlurContainer'
import SkillTextAndIcon from './SkillTextAndIcon'

const Skill = () => {
  return (
    <BlurContainer className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
      <SkillTextAndIcon label={'html'}>
        <SiHtml5 color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'css'}>
        <SiCss3 color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'bootstrap'}>
        <SiBootstrap color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'tailwind'}>
        <SiTailwindcss color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'sass'}>
        <SiSass color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'javascript'}>
        <SiJavascript color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'typescript'}>
        <SiTypescript color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'react'}>
        <SiReact color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'react native'}>
        <FaMobileAlt color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'redux'}>
        <SiRedux color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'ubuntu Os'}>
        <SiUbuntu color='#000' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'github'}>
        <SiGithub color='#000' size={26} />
      </SkillTextAndIcon>
    </BlurContainer>
  )
}

export default Skill