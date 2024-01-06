import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import PopularProduct from './Components/PopularProduct/PopularProduct'

function App() {

  return (
    <div className='bg-[#eeeff0]'>
      <div className='md:w-3/4 md:px-0 px-2  mx-auto py-4'>
        <Navbar></Navbar>
        <Banner></Banner>
        <PopularProduct></PopularProduct>
      </div>
      <div className=''>
        <p>Footer section</p>
      </div>
    </div>
  )
}

export default App
