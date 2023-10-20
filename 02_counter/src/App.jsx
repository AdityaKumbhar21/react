import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Why we need Hooks
// Hooks are used to manipulate the state in UI. There are different type of hooks like useState, useEffect,etc.

// useState Hook
// Returns an array with two parameters counter and setCounter
// counter is used to display the changed value and setCounter is used to manipulate the value

function App() {
 
  // using hook state
  let [counter,setCounter] = useState(0)

  let increaseValue = ()=>{
    // changing counter value using setCounter
    // limiting increasing value till 20 
    if(counter!=20)
    {
      setCounter(counter+1)
      console.log(`Counter Increased: ${counter}`);
    }
    else{
      alert("Counter cannot be more than 20")
    }
   
  }

  let decreaseValue = ()=>{
    // decreasing counter value
    // limiting decreasing value till 0 
    if(counter !=0){
      setCounter(counter-1)
      console.log(`Counter Decreased: ${counter}`);
    }
    else{
      alert("Cannot decrease less than zero")
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={increaseValue}>Increase Counter value</button>
      <button onClick={decreaseValue}>Decrease Counter value</button>

      <h3>Counter: {counter}</h3>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
