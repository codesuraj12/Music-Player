import { useState } from 'react'

import './App.css'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AllCards from './Components/AllCards'
import Musicbar from './Components/Musicbar'
// import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
    {/* <p className='h-20'>horr</p> */}
       <HeroSection/>
       <AllCards/>
       <Musicbar/>
    </>
  )
}

export default App
