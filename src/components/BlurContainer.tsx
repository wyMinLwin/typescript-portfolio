import React from 'react'
type BlurContainerProps = {
    children: React.ReactNode;
    className?: string;
    setOpenModel?: () => void;
    notClickable?: boolean;
}

const BlurContainer = ({children,className=' ',setOpenModel,notClickable}:BlurContainerProps) => {
  return (
    <div 
    onClick={() => {
      if (setOpenModel ) {
        setOpenModel()
      }
    }}
    className={`w-full h-fit rounded-3xl text-white bg-white/20 p-5 transition ease-in-out ${!notClickable && 'hover:shadow-md hover:-translate-y-1 hover:shadow-white/40 active:shadow-none active:translate-y-0 '} 
    ${className} `}
    >
        {children}
    </div>
  )
}

export default BlurContainer