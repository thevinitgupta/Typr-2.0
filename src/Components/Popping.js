import React, { useEffect, useState } from 'react'
import "../Css/Popping.css"

function Popping({text,delay}) {
  const [className, setSetClassName] = useState("Popping");
useEffect(() => {
  setInterval(() => {
    setSetClassName("Popping popped");
  }, 350*delay);
}, []);

    return (<>
      <div  className={className}>
          <span>{text}</span>
    </div>
    </>);
}

export default Popping