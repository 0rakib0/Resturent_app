import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import PopularProduct from './Components/PopularProduct/PopularProduct'
import Recommended from './Components/Recomnded/Recommended'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='bg-[#eeeff0]'>
      <div className='md:w-3/4 md:px-0 px-2  mx-auto py-4'>
        <Navbar></Navbar>
        <Banner></Banner>
        <PopularProduct></PopularProduct>
        <Recommended></Recommended>
      </div>
      <div className='bg-[#f99f1c] mt-24'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
