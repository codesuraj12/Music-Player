import { useState } from 'react'

import './App.css'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AllCards from './Components/AllCards'
import Musicbar from './Components/Musicbar'
import { DarkModeContext } from './context/Context'




function App() {
 const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
   setIsDarkMode(!isDarkMode)
  }

  return (
    <>
    <DarkModeContext.Provider value ={{isDarkMode,setIsDarkMode,toggleDarkMode}}>
<div className={` transition-all duration-300 pb-30 ${isDarkMode ?'bg-gray-800 text-white': 'bg-white text-gray-900'}`}>
      <Navbar />
      {/* <p className='h-20'>horr</p> */}
      <HeroSection />
      <AllCards />
      <Musicbar />
  </div>    
      </DarkModeContext.Provider>
    </>
  )
}

export default App
