import React from 'react'
import BlurContainer from './BlurContainer'
import { IoSettingsSharp } from 'react-icons/io5'

const Setting = () => {
  return (
    <BlurContainer>
        <div className='flex flex-row justify-between items-center'>
            <div className='font-light text-lg'>Setting</div>
            <IoSettingsSharp size={24} />
        </div>
    </BlurContainer>
  )
}

export default Setting