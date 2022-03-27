import React from 'react'
import "../Css/Typo.css"
import TypoRow from './TypoRow'

function Typo({row}) { 
  const rows = ["AX1&f2Q5sD", "BX1eF5sQr3", "R4@F3ZQ5sD", "AX1&f2Q5sD", "BX1eF5sQr3", "AX1&BX1eF5", "R4@F3ZQ5sD"];
  //const row  = randomize(0,rows.length); 
  //console.log(row);
  return (
    <div className='typo'>
        {rows.map((str,index)=>{
          if(index===row){
              console.log(str)
              return <TypoRow rowText={str} key={index} hide={false}/>
          }
          return <TypoRow rowText={str}  key={index} hide={true}/>
        })}
    </div>
  )
}

export default Typo