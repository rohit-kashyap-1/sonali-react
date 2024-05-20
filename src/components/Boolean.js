import React, { useState } from 'react'

export default function Boolean() {
   let [active,setActive] = useState(false)
   
   let [mode,setMode] = useState({type:false,text:'Dark Mode'})
   
   function makeTrue(){
    setActive(true)
   }
   function makeFalse(){
    setActive(false)
   }

   function changeMode(){
    if(mode.type==false){
        setMode({type:true,text:'Light Mode'})
        document.getElementById("body").setAttribute("data-bs-theme","dark")
    }else{
        setMode({type:false,text:'Dark Mode'})
        document.getElementById("body").setAttribute("data-bs-theme","light")
    }
    
    
    //
   }
  return (
    <div >
      <h1>State: another example</h1>
      <h1>{(active==true)?`True`:`False`}</h1>
      <button onClick={makeTrue}>Make True</button>
      <button onClick={makeFalse}>Make False</button>
      <hr />
      <button onClick={changeMode}>{mode.text}</button>
    </div>
  )
}
