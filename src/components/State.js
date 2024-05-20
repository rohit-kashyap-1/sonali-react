import React, { useState } from 'react'

export default function State() {
    // useState method
let [counter,setCounter] = useState(1)
  function increment(){
    counter++
    setCounter(counter)
  }
  function decrement(){
    counter--
    setCounter(counter)
  }
  return (
    <div>
      <h1>State Lifecycle Method</h1>
       <h1 className='display-1'>{counter}</h1>
       <h1 className='display-1'>{counter}</h1>
       <h1 className='display-1'>{counter}</h1>
       <h1 className='display-1'>{counter}</h1>
       <h1 className='display-1'>{counter}</h1>
       <h1 className='display-1'>{counter}</h1>
       <h1 className='display-1'>{counter}</h1>
       <button onClick={increment} className='btn btn-success'>+</button> &nbsp;
       <button onClick={decrement} className='btn btn-danger'>-</button>
    </div>
  )
}
