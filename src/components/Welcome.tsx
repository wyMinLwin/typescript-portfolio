import React from 'react'
import BlurContainer from './BlurContainer'

const Welcome = () => {
  return (
    <>
        <BlurContainer>
            <p className='font-bold text-3xl'> Need someone to bring your design into code?</p>
            <button 
            className='rounded-l-full mt-2 rounded-r-full bg-comic-sky p-1 px-2 text-base font-bold'
            >
                Work with me🤝
            </button>
        </BlurContainer>
        
    </>
  )
}

export default Welcome