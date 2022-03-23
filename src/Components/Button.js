import React, { useState } from 'react'
import "../Css/Button.css"

function Button({text,light}) {
  const [buttonClass, setButtonClass] = useState('Button');
  const [clicked, setClicked] = useState(false);
  const clickedStyle = {
    color : light
  }
  return (
    <div onClick={(event)=>{
      console.log("Clicked")
      setButtonClass('Button-clicked');
      setClicked(true);
      setTimeout(()=>{
          setButtonClass('Button-Unclicked');
          setClicked(false);
      },200)
      console.log(buttonClass)
    }} className={buttonClass} style={clicked ? clickedStyle : {}}>
        <span>{text}</span>
    </div>
  )
}

export default Button