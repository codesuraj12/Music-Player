import React from 'react'

const CardSkeleton = () => {
    return (
        <div className=' rounded-lg shadow-md overflow-hidden 
            hover:shadow-lg transition-all duration-300 w-80 h-[400px] animate-pulse'>
            <div className="w-full bg-slate-400 h-64 object-cover p-2 rounded-lg"></div>

            <div className="p-4 h-32">
                <div className='bg-slate-300 p-2 w-full h-5 mt-2'></div>
                <div className='bg-slate-300 p-2 w-full h-5 mt-2'></div>

             
</div>

        </div>
    )
}

export default CardSkeleton