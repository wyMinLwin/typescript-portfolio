import React from 'react'
import BlurContainer from './BlurContainer'
import RecentPJ from '../assets/recent.png'

const RecentWork = () => {
  return (
    <BlurContainer>
        <img src={RecentPJ} className='h-10/12' alt='pj' />
        <p className='text-sm font-light'>A mini e-commerce project with typescript-react. <a className='underline' href='https://wyminlwin-maypan-grocery.netlify.app/'>Watch demo here </a></p>
    </BlurContainer>
  )
}

export default RecentWork