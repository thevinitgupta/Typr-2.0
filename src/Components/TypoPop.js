import React from 'react'
import "../Css/TypoPop.css"

function TypoPop({text,hide}) {

  return (
    <div className={hide ? 'TypoPop' : 'TypoPop TypoPop-popped'}>
        <span>{text}</span>
    </div>
  )
}

export default TypoPop