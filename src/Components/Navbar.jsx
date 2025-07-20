import React, { useContext } from 'react'
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { DarkModeContext } from '../context/Context';


const Navbar = () => {
const{isDarkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <nav className={`flex justify-between items-center p-4 shadow-md sticky top-0 transition-all duration-300 ${isDarkMode ? 'bg-black text-amber-50' : 'bg-amber-50 text-black'}`}>
      <div className='text-3xl'>
        < FiAlignJustify />
      </div>
      <ul className="flex space-x-8">
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

        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
          Sign up
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
