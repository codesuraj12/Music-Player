import React from 'react'
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className='text-3xl'>
< FiAlignJustify/>
        </div>
      <ul className="flex space-x-8">
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">
          Home
        </li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">
          About
        </li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">
          Services
        </li>
      </ul>
      
      <div className="flex space-x-3">
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
