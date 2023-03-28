import React, { useEffect, useState }  from 'react'
import BlurContainer from './BlurContainer';
import ModelContainer from './ModelContainer';
import {BsDashCircleFill} from 'react-icons/bs'

type ModelOverlayProps = {
    openModal: boolean;
    setOpenModel: () => void;
    children: React.ReactNode
}
const ModelOverlay = (props:ModelOverlayProps) => {
  const [currentAnimation,setCurrentAnimation] = useState<string>('')
  useEffect(() => {
    if (currentAnimation === '') {
      setCurrentAnimation(prev => prev = 'openPopup')
    }
  },[currentAnimation])

  return (
    <>
        {
          props.openModal &&
          <>
              <ModelContainer>
                <div className={`${currentAnimation} text-white max-h-screen overflow-scroll m-2 md:m-10 p-5 rounded-3xl z-20 absolute top-0 left-0 right-0 bottom-0`}>
                    <span className='flex justify-center items-center h-full'>
                        <div className='w-fit h-fit bg-black/95 rounded-3xl relative'>
                        <div onClick={() => {
                          setCurrentAnimation(prev => prev = 'closePopup')
                          setTimeout(() => {
                            props.setOpenModel()
                            setCurrentAnimation(prev => prev = '')
                          },50)
                        }} className='absolute right-3 top-3 z-30 text-comic-red'>
                            <BsDashCircleFill />
                        </div>
                        <BlurContainer notClickable={true} >
                            {props.children}
                        </BlurContainer>
                        </div>
                    </span>
                </div>
              </ModelContainer>  
          </>
        }     
    </>
  )
}

export default ModelOverlay