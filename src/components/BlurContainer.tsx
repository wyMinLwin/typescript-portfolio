import React from 'react'
type BlurContainerProps = {
    children: React.ReactNode
    className?: string
}

const BlurContainer = (props:BlurContainerProps) => {
  return (
    <div className={`w-full h-fit rounded-3xl text-white bg-white/20 p-5 ${props.className} `}>
        {props.children}
    </div>
  )
}

export default BlurContainer