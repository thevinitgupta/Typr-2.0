import React from 'react'
import '../Css/Landing.css'
import Button from "./Button"

function Landing() {
  return (
    <div className='landing'>
        <div className='typed'>
            <div className='landing-head'>Typr 2.0</div>
            <div className='landing-subhead'>
            Your arena to type
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