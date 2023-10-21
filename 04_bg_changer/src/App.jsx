import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState("blue")

  return (

      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor("red")} className='outline-none rounded-lg px-2 text-white'style={{backgroundColor: "red"}}
            >Red</button>

            <button className='outline-none rounded-lg px-2 text-white'style={{backgroundColor: "blue"}}
            onClick={()=>setColor("blue")}>Blue</button>

            <button className='outline-none rounded-lg px-2 text-white'style={{backgroundColor: "green"}}
            onClick={()=>setColor("green")}>Green</button>

            <button className='outline-none rounded-lg px-2 text-white'style={{backgroundColor: "purple"}}
            onClick={()=>setColor("purple")}>Purple</button>

            <button className='outline-none rounded-lg px-2 text-white'style={{backgroundColor: "yellow"}}
            onClick={()=>setColor("yellow")}>Yellow</button>

          </div>
        </div>
      </div>
  )
}

export default App
