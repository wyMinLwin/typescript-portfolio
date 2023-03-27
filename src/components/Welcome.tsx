import React, { useContext, useState } from 'react'
import { ModalContextProvider } from '../context/ModalContext'
import BlurContainer from './BlurContainer'
import ModelContainer from './ModelContainer'

const Welcome = () => {
  // const {model,dispatchModel} = useContext(ModalContextProvider)
  const [openModel,setOpenModel] = useState(false);

// console.log(model)
  return (
    <>
        <BlurContainer >
            <p className='font-bold text-3xl'> Need someone to bring your design into code?</p>
            <button 
            onClick={() => {setOpenModel(true);}}
            className='rounded-l-full mt-2 rounded-r-full bg-comic-red p-1 px-2 text-base font-bold'
            >
                Work with me🤝
            </button>
        </BlurContainer>

        {
          openModel &&
          <>
            <ModelContainer>
              <div className='m-2 md:m-10 rounded-2xl bg-black/95 absolute top-0 right-0 left-0 bottom-0 align-middle'>
                <div onClick={() => {setOpenModel(false)}} className='absolute right-3 top-3 text-comic-red'>X</div>
              </div>
            </ModelContainer>
          </>
        }        
    </>
  )
}

export default Welcome