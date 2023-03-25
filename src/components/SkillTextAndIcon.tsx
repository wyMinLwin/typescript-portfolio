import React from 'react'
type SkillTextAndIconTypes = {
    label: string; 
    children : React.ReactNode;
}
const SkillTextAndIcon = (props: SkillTextAndIconTypes) => {
  return (
    <div className='flex flex-col justify-center items-center m-2'>
        {props.children}
        <p className='text-black text-xs mt-2 text-center'>{props.label.toUpperCase()}</p>
    </div>
  )
}

export default SkillTextAndIcon