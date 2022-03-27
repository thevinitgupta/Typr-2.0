import React from 'react'
import TypoPop from './TypoPop'
import randomize from "../Directives/Randomize"
import "../Css/TypoRow.css"

function TypoRow({rowText,hide}) {
  const column = randomize(0,rowText.length);
  return (
    <div className='TypoRow'>
        {hide===false ? rowText.split("").map((text,index)=>{
            return index===column ? <TypoPop text={text} key={index} hide={false}/> :  <TypoPop text={text} key={index} hide={true}/>;
        }) : rowText.split("").map((text,index)=>{
            return <TypoPop text={text} key={index} hide={true}/>;
        })}
    </div>
  )
}

export default TypoRow