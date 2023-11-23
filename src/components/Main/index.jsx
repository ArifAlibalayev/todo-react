import React from 'react'
import { useState } from "react";

function Main() {

    const [value, setValue] = useState('');
    
  return (
    <div>
        <input type="text" onChange={(e)=>{
            setValue(e.target.value)
        }}
        value={value}/>

        <div className="Todo" >
        <li>{value}</li> 
        </div>
    </div>
  )
}

export default Main