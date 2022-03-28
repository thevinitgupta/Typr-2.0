import React, { useState } from 'react'
import "../Css/TypoPop.css"

function TypoPop({text,hide,click}) {
  const [clicked, setClicked] = useState(click);
  if(clicked===true){
    setTimeout(()=>{
      setClicked(false);
    },250)
  }
  return (
    <div className={hide===true ? 'TypoPop TypoPop-hide' : clicked ? 'TypoPop TypoPop-clicked' : 'TypoPop'}>
        <span>{text}</span>
    </div>
  )
}

export default TypoPop