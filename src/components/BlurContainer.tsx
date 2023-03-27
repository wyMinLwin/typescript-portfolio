import React from 'react'
type BlurContainerProps = {
    children: React.ReactNode
    className?: string
}

const BlurContainer = (props:BlurContainerProps) => {
  return (
    <div 
    className={`w-full h-fit rounded-3xl text-white bg-white/20 p-5 transition ease-in-out 
    hover:shadow-md hover:-translate-y-1 hover:shadow-white/40 
    active:shadow-none active:translate-y-0 
    ${props.className} `}
    >
        {props.children}
    </div>
  )
}

export default BlurContainer