import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#eeeff0]'>
      <div className='md:w-3/4 md:px-0 px-2  mx-auto py-4'>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div className=''>
        <p>Footer section</p>
      </div>
    </div>
  )
}

export default App
