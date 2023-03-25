import React, { useState } from 'react'
import {SiJavascript} from 'react-icons/si'
import BlurContainer from './BlurContainer'
type skillsType = {
  name:string;
  iconName:string;
}
const Skill = () => {
    const [skills,setSkills] = useState<skillsType[]>([
        {name:'html',iconName:'SiHtml5'},
        {name:'css',iconName:'SiCss3'},
        {name:'bootstrap',iconName:'SiBootstrap'},
        {name:'tailwind',iconName:'SiTailwindcss'},
        {name:'sass',iconName:'SiSass'},
        {name:'javascript',iconName:'SiJavascript'},
        {name:'typescript',iconName:'SiTypescript'},
        {name:'react',iconName:'SiReact'},
        {name:'Redux',iconName:'SiRedux'},
        {name:'github',iconName:'SiGithub'},
        {name:'ubuntu os',iconName:'SiUbuntu'},
    ])
  return (
    <BlurContainer>
      <SiJavascript size={24} />
    </BlurContainer>
  )
}

export default Skill