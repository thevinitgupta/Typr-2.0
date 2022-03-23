import React from 'react'
import '../Css/Landing.css'
import Button from "./Button"
import Popping from './Popping';

function Landing() {
  const headText = "Typr_2.0";
  return (
    <div className='landing'>
        <div className='typed'>
            <div className='landing-head'>
              {headText.split("").map((text,index)=>{
                if(text==='_') return <span key={index} delay={index+3} className='space'></span>;
                return <Popping key={index} delay={index} text={text}/>;
              })}
            </div>
        </div>
        <div className='landing-desc'>
            <div className='landing-desc-text'>
                Join and challenge your friends for a Battle Royale
            </div>
            <div className='landing-desc-buttons'>
              <Button text='Login' light="#6ffa62"/>
              <Button text='Sign Up' light="#9fff00"/>
              <Button text='Typr' light="#ffd900" />
            </div>
        </div>
    </div>
  )
}

export default Landing