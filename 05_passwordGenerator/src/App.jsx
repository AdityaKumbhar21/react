import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const[length,setLength] = useState(8)  // for the length of the password
  const[numberAllowed,setNumberAllowed] = useState(false) // for including or excluding numbers
  const[charAllowed,setCharAllowed] = useState(true)  // for including or excluding special characters
  const[password,setPassword] = useState("") // for generating random password


  let passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str += "0123456789"  // if number is checked then will include numbers in string
    }
    if(charAllowed){
      str +="!@#$%^&*(){}~`[]><?/" // if special characters is checked then will include special characters in string
    }
   
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)  // for generating an random index to generate password
      pass += str.charAt(char) // adding that string to password
      
    }

    setPassword(pass) // setting the generated random password to the main password
  },[length,numberAllowed,charAllowed,setPassword]) // dependencies, that is it will store the function in cache as much as possible rather than rendering continously

  let passwordRef = useRef(null) // Giving reference of the password
  let copyToClipBoard = useCallback(()=>{
    // more oprimization
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password) // copying the text to the clipboard
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator]) // Running the function when there is any change in folloeing dependencies

  return (
      <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // adding refrence here to copy the password
        />
        <button
       
        onClick={copyToClipBoard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 btn'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range" className='cursor-pointer'
            min={8}
            max={20}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}} />
            <label >Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor='numberInput'> Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {charAllowed}
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='charachterInput'> Special Characters</label>
          </div>

        </div>
        </div>
      </>
  )
}

export default App
