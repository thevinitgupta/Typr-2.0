import React from 'react'
import "../Css/Button.css"

function Button({text, subclass}) {
  return (
    <div className={`Button Button-${subclass}`} >
        {text}
    </div>
  )
}

export default Button