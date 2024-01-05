import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#eeeff0]'>
      <div className='md:w-3/4 md:px-0 px-2  mx-auto py-4'>
        <Navbar></Navbar>
        <h1>main Section</h1>
      </div>
      <div className=''>
        <p>Footer section</p>
      </div>
    </div>
  )
}

export default App
