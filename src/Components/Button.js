import React, { useState } from 'react'
import "../Css/Button.css"

function Button({text}) {
  const [buttonClass, setButtonClass] = useState('Button');
  return (
    <div onClick={(event)=>{
      console.log("Clicked")
      setButtonClass('Button-clicked');
      setTimeout(()=>{
          setButtonClass('Button-Unclicked')
      },200)
      console.log(buttonClass)
    }} className={buttonClass}>
        <span>{text}</span>
    </div>
  )
}

export default Button