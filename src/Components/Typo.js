import React from 'react'
import "../Css/Typo.css"
import TypoRow from './TypoRow'
import randomize from '../Directives/Randomize';

function Typo() {
    const rows = ["AX1&f2Q5sD", "BX1eF5sQr3", "R4@F3ZQ5sD", "AX1&f2Q5sD", "BX1eF5sQr3", "AX1&BX1eF5sQr3", "R4@F3ZQ5sD"];
    const row = randomize(0,rows.length);
  return (
    <div className='typo'>
        {rows.map((str,index)=>{
            return index===row ? <TypoRow rowText={rows[row]} key={index} hide={false}/> : <TypoRow rowText={'          '}  key={index} hide={true}/>
        })}
    </div>
  )
}

export default Typo