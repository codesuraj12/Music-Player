import React, { useContext } from 'react'
import { useState, useRef } from 'react'
import { DarkModeContext } from '../context/Context'

const Musicbar = () => {
const{isDarkMode} = useContext(DarkModeContext)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null)  //this is for making audio play and pause

  const handlePlayPause = () => {
    // if(!playerRef.current) return;
    if (!allSongs[currentIndex].file) {
      console.log('file nhi he')
    }
    if (isPlaying) {
      playerRef.current.pause()
      setIsPlaying(false)


    }
    else {
      playerRef.current.play()
      setIsPlaying(true)
    }
    console.log(playerRef.current)

  }
  const handleNext = () => {
    console.log(playerRef.current)
  }



  const musicLibrary = {
    cool: [
      { name: 'Coachella', file: '/music/cool/3rd music.mp3' },
      { name: 'Pop Song 1', file: '/music/cool/2nd music.mp3' },
      { name: 'Pop Song 2', file: '/music/cool/1st music.mp3' },

    ],
    rock: [

      { name: 'Pop Song 1', file: '/music/rock/rock1.mp3' },
    ],
  }

  const allSongs = [...musicLibrary.cool, ...musicLibrary.rock,]; //yha spread operator ka use krke sare songs ek hi array me jodega

  return (
    <div className={`fixed bottom-0 w-full bg-amber-50 ${isDarkMode ? 'bg-black text-amber-50': 'bg-amber-50 text-black'}`}>

      {/* Track Info */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-gray-800">{allSongs[currentIndex]?.name}</h3>
        <p className="text-sm text-gray-500">Artist Name</p>
      </div>
      <div className="w-full  p-5  rounded-lg shadow-lg">
        <div className="mb-2">
          <div
            className="slider relative h-2 bg-amber-300 rounded-full cursor-pointer"
          //   onClick={handleProgressChange}
          >
            <div
              className="absolute h-full bg-amber-500 rounded-full transition-all duration-150"
            // style={{ width: `${progress}%` }}
            ></div>
            <div
              className="pointer absolute rounded-full bg-black h-4 w-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
            // style={{ left: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            //   onClick={handlePrevious}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        <audio src={allSongs[currentIndex].file} ref={playerRef} />   {/* yha audio me current song ka index diya he */}

      </div>

    </div>
  )
}

export default Musicbar