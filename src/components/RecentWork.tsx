import React from 'react'
import BlurContainer from './BlurContainer'
import RecentPJ from '../assets/recent.png'

const RecentWork = () => {
  return (
    <BlurContainer>
        <img src={RecentPJ} className='w-10/12 mx-auto' alt='pj' />
        <p className='text-lg font-light text-center mt-2'>A mini e-commerce project with typescript-react. <a className='underline' href='https://wyminlwin-maypan-grocery.netlify.app/'>Watch demo here </a></p>
    </BlurContainer>
  )
}

export default RecentWork