import React, { useContext } from 'react'
import { DarkModeContext } from '../context/Context'


const Card = ({img ,desc,title}) => {
    const {isDarkMode} = useContext(DarkModeContext)
    return (
        <div>
            <div className={`bg-transparent rounded-lg shadow-md overflow-hidden 
            hover:shadow-lg transition-all duration-300 w-80 h-[400px] ${isDarkMode? 'bg-black text-amber-50':
                'bg-amber-50 text-black'
            }`}>
                <img
                    src={img}
                    alt='he'
                    className="w-full h-64 object-cover p-2 rounded-2xl"
                />
                <div className="p-4 h-32">
                    <h3 className="text-lg font-semibold mb-2">
                       {title}
                    </h3>
                    <p >{desc}</p>
                    {/* {description && (
          <p className="text-gray-600 text-sm">
            {description}
          </p> */}
                    {/* )} */}
                </div>
            </div>
        </div>
    )
}

export default Card