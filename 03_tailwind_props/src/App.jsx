import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let info = "Software Development Engineer"
  return (
    <>
        <h1 className="text-3xl font-bold underline bg-green-400 rounded-xl p-4 text-black mb-5">Tailwind Test</h1>
       <Card/>   {/* Adding components to page */}
       <Card userName = "Aditya" info = {info}/>   {/* Adding propes  to components */}
    </>
  )
}

export default App
