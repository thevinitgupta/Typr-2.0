import React, { useEffect } from 'react'
import TypoPop from './TypoPop'
import randomize from "../Directives/Randomize"
import "../Css/TypoRow.css"

function TypoRow({colSet,rowText,hide, row}) {
  row = row+""
  let idSet = {}
  let columns = [];
  while(columns.length<= colSet){
    let rand = randomize(0,rowText.length);
    while(rand>2 && rand<6){
      rand = randomize(0,rowText.length);
    }
    idSet.rand = `${row}${rand}`
    columns.push(rand);
  }
  const popId = row+""+randomize(0,rowText.length)
  return (
    <div className='TypoRow'>
        {hide===false ? rowText.split("").map((text,index)=>{
            const typoId=`${row}${index}`;
            const clicked = typoId===popId
            return columns.includes(index) ? <TypoPop clicked={clicked} text={text} key={index} hide={false}/> :  <TypoPop clicked={clicked} text={text} typoId={`${row}${index}`} key={index} hide={true}/>;
        }) : rowText.split("").map((text,index)=>{
          const typoId=`${row}${index}`;
            const clicked = typoId===popId
            return <TypoPop clicked={clicked} text={text} key={index} hide={true}/>;
        })}
    </div>
  )
}

export default TypoRow