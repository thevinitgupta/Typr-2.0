import React from 'react'
import "../Css/Typo.css"
import randomize from '../Directives/Randomize';
import TypoRow from './TypoRow'

function Typo({rowSet}) { 
  const rows = ["óप&ด้2Lχ7$", "S西2цAбթ@0F", "φ5ษ#1छVệlZ", "b8篇E¿θლ>ή+", "JთWकxHдk0Z", "mتGй生dԻ7λa", "n%अzψJñ3лф"];
  const colSet = randomize(2,6);
  return (
    <div className='typo'>
        {rows.map((str,index)=>{
          if(rowSet.includes(index)){
              console.log(str)
              return <TypoRow row={index} colSet={colSet} rowText={str} key={index} hide={false}/>
          }
          return <TypoRow rowText={str} row={index} key={index} hide={true}/>
        })}
    </div>
  )
}

export default Typo