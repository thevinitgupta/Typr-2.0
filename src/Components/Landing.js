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
                Join and challenge your friends for a Battle Royale...
            </div>
            <div className='landing-desc-buttons'>
              <Button text='Login' subclass='primary Button-left-slide-in'/>
              <Button className='landing-signup' text='Sign Up' subclass='secondary  Button-right-slide-in'/>
            </div>
        </div>
    </div>
  )
}

export default Landing