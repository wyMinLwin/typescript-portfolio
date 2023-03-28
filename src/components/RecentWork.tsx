import React, { useState } from 'react'
import BlurContainer from './BlurContainer'
import RecentPJ from '../assets/recent.png'
import ModelOverlay from './ModelOverlay'

const RecentWork = () => {
  const [recentModel,setRecentModel] = useState(false)
  return (
    <>
      <BlurContainer setOpenModel={() => setRecentModel(prev => prev = true)}>
        <img src={RecentPJ} className='w-10/12 mx-auto' alt='pj' />
        <p className='text-lg font-light text-center mt-2'>A mini e-commerce project with typescript-react. <a className='underline' href='https://wyminlwin-maypan-grocery.netlify.app/'>Watch demo here </a></p>
      </BlurContainer>
      <ModelOverlay openModal={recentModel} setOpenModel={() => setRecentModel(prev => prev =false)}>
        <div className='p-3 my-auto h-fit grid grid-cols-1 text-center font-semibold text-lg'>
          <div>I can't update all of my recent work on my portfolio.</div>
          <div>So you better check my recent project on my <a href='https://github.com/wyMinLwin/' className='text-lg text-comic-blue hover:text-comic-red font-light italic'>GitHub</a> repositories</div>
        </div>
      </ModelOverlay>
    </>
  )
}

export default RecentWork