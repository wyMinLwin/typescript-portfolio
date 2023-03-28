import React, { useState } from 'react'
import BlurContainer from './BlurContainer'
import ModelOverlay from './ModelOverlay'
import SkillsContainer from './SkillsContainer'

const Skill = () => {
  const [skillsModel,setSkillsModel] = useState(false)
  return (
    <>
      <BlurContainer className='grid grid-cols-2 sm:grid-cols-3 gap-5' setOpenModel={() => setSkillsModel(prev => prev = true)}>
        <SkillsContainer />
      </BlurContainer>
      <ModelOverlay openModal={skillsModel} setOpenModel={() => setSkillsModel(prev => prev = false)} >
        <div className='grid grid-cols-1'>
          <div className='flex flex-row flex-wrap '><SkillsContainer /></div>
        </div>
        <p className='text-center p-1 font-semibold text-lg'>Those are my skill sets till 28 Mar 2023.</p>
        <p className='text-center p-1 font-semibold text-lg'>I can also use various of libraries really will.</p>
        <p className='text-center p-1 font-semibold text-lg'>And also good at prompting.</p>
      </ModelOverlay>
    </>
  )
}

export default Skill