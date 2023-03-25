import React from 'react'
import {FaMobileAlt } from 'react-icons/fa'
import {SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiReact, SiRedux, SiSass, SiTailwindcss, SiTypescript, SiUbuntu} from 'react-icons/si'
import BlurContainer from './BlurContainer'
import SkillTextAndIcon from './SkillTextAndIcon'

const Skill = () => {
  return (
    <BlurContainer className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
      <SkillTextAndIcon label={'html'}>
        <SiHtml5 color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'css'}>
        <SiCss3 color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'bootstrap'}>
        <SiBootstrap color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'tailwind'}>
        <SiTailwindcss color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'sass'}>
        <SiSass color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'javascript'}>
        <SiJavascript color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'typescript'}>
        <SiTypescript color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'react'}>
        <SiReact color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'react native'}>
        <FaMobileAlt color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'redux'}>
        <SiRedux color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'ubuntu Os'}>
        <SiUbuntu color='#fff' size={26} />
      </SkillTextAndIcon>
      <SkillTextAndIcon label={'github'}>
        <SiGithub color='#fff' size={26} />
      </SkillTextAndIcon>
    </BlurContainer>
  )
}

export default Skill