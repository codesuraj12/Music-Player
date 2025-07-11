import React from 'react'


const Card = ({img ,desc,title}) => {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-80 h-[400px] ">
                <img
                    src={img}
                    alt='he'
                    className="w-full h-64 object-cover p-2 rounded-2xl"
                />
                <div className="p-4 h-32">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                       {title}
                    </h3>
                    <p className='text-black'>{desc}</p>
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