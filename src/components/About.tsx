import React from 'react'
import BlurContainer from './BlurContainer'

const About = () => {
  return (
    <BlurContainer>
        <div className='flex flex-row justify-between items-center'>
            <div className='font-semibold text-base '>ABout</div>
            <a className='font-extralight text-gray-100' href='#' download={true}>Get my Resume</a>
        </div>
        <p className='text-xs mt-2'>
            I am a front-end developer based on Yangon and available to work for across the whole work both on campus and remote.
            I am mainly focusing on front-end development for both Web and Mobile cross platform development.
            I am turn almost every design into codes.
            Really passionated. And tryna catch every trending techs.
        </p>
    </BlurContainer>
  )
}

export default About