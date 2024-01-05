import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-3/4 bg-red-300 mx-auto'>
        <h1>main Section</h1>
      </div>
      <div className='bg-green-300'>
        <p>Footer section</p>
      </div>
    </>
  )
}

export default App
