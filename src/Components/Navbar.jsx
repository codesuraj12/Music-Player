import React, { useContext } from 'react'
import Logo from '/assets/Music Logo.png'
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { DarkModeContext } from '../context/Context';
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

  const handleNav = () => {
    setVisible(!visible)

  }
  return (
    <nav className={`flex justify-between items-center z-10 p-4 shadow-md sticky top-0 ease-in-out duration-300 opacity-100 scale-100 ${isDarkMode ? 'bg-black text-amber-50' : 'bg-amber-50 text-black'}`}>

      {/* hamburger */}
      <div className='text-3xl  md:hidden'>
        {visible ? <RxCross1 onClick={handleNav} /> : < FiAlignJustify onClick={handleNav} />}
      </div>
      {/* logo */}
      <div className=' w-20'>
        <img src={Logo} alt="logo" />
      </div>
      {/* Mobile View */}
      {visible &&
        <ul className="flex flex-col space-y-4 transition-all absolute top-full left-0 w-full text-black bg-white  p-4 z-10 md:hidden">
          <li className="hover:text-blue-600 cursor-pointer font-medium">Home</li>
          <li className="hover:text-blue-600 cursor-pointer font-medium">About</li>
          <li className="hover:text-blue-600 cursor-pointer font-medium">Services</li>
        </ul>
      }



      {/* desktop view */}
      <ul className="hidden md:flex space-x-8 ">
        <li className=" hover:text-blue-600 cursor-pointer font-medium">
          Home
        </li>
        <li className=" hover:text-blue-600 cursor-pointer font-medium">
          About
        </li>
        <li className=" hover:text-blue-600 cursor-pointer font-medium">
          Services
        </li>
      </ul>

      <div className="flex space-x-3">

        <button
          onClick={toggleDarkMode}
          className={`relative w-16 h-8 rounded-full transition-all duration-300 ${isDarkMode
            ? 'bg-blue-900'
            : 'bg-gray-300'
            }`}
          aria-label="Toggle dark mode"
        >
          <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${isDarkMode ? 'transform translate-x-8' : ''
            }`}>

          </div>
        </button>


      </div>
    </nav>
  )
}

export default Navbar
