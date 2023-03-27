import React from 'react'
import { createPortal } from 'react-dom';

type ModelContainerProps = {
    children: React.ReactNode
}
const ModelContainer = (props:ModelContainerProps) => {
  return (
    <>
    {
        createPortal(props.children,document.getElementById('modal') as HTMLElement)
    }
    </>
  )
}

export default ModelContainer