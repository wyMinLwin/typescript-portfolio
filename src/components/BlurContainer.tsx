import React from 'react'
type BlurContainerProps = {
    children: React.ReactNode | JSX.Element;
}

const BlurContainer = (props:BlurContainerProps) => {
  return (
    <div className='w-full border-4 rounded-3xl backdrop-blur-xl text-white bg-white/20 p-5 border-black'>
        {props.children}
    </div>
  )
}

export default BlurContainer