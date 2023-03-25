import React from 'react'
type SkillTextAndIconTypes = {
    label: string; 
    children : React.ReactNode;
}
const SkillTextAndIcon = (props: SkillTextAndIconTypes) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        {props.children}
        <p>{props.label}</p>
    </div>
  )
}

export default SkillTextAndIcon