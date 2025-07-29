import React, { useContext } from 'react'
import { useState, useRef } from 'react'
import { DarkModeContext } from '../context/Context'
import { useEffect } from 'react';



const Musicbar = () => {
  const { isDarkMode } = useContext(DarkModeContext)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0); //current song dikhane ke liye


  const [allSongs, setallSongs] = useState([])  //this is for taking json file of songs

  const playerRef = useRef(null)  //this is for making audio play and pause

  const handlePlayPause = () => {
    if (allSongs.length === 0 || !allSongs[currentIndex]?.file) {
      console.log('file nhi he');
      return;
    }
    if (isPlaying) {
      playerRef.current.pause()
      setIsPlaying(false)


    }
    else {
      playerRef.current.play()
      setIsPlaying(true)
    }
  

  }
  // next button
  const handleNext = () => {
    const Next = (currentIndex + 1) % allSongs.length
    setCurrentIndex(Next);
    setTimeout(() => {
      if (playerRef.current) {

        playerRef.current.play()
        setIsPlaying(true)
      }

    }, 500);

  }
  // previous button
  const handlePrevious = () => {
    const previous = ((currentIndex - 1 + allSongs.length) % allSongs.length)
    setCurrentIndex(previous)
    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.play()
        setIsPlaying(true)
      }
    }, 500);
  }

  // song duration
  const songduration = () => {
    const audio = playerRef.current;
    if ((!audio) || isNaN(audio.duration)) return '0:00'; //you can also  add  isNaN(audio.duration)  when song fully loaded then duration will show

    const total = Math.floor(audio.duration);
    const min = Math.floor((audio.duration) / 60);
    const sec = (total % 60).toString().padStart(2, '0')

 

    return `${min}: ${sec}`
  }

  // songs playing time check
  const songtiming = () => {
  const audio = playerRef.current;
 
console.log(playerRef)
  console.log(`Duration: ${audio.currentTime}`);
};


  // yha json file me se data laya gya he fetch krke
  useEffect(() => {
    fetch('/music/songs.json')
      .then((res) => res.json())
      .then((data) => {
        const merged = [...data.rock, ...data.cool] //yha spread operator ka use krke sare songs ek hi array me jodega
        setallSongs(merged)
      })

  }, [])




  return (
    <div className={`fixed bottom-0 w-full bg-amber-50 ${isDarkMode ? 'bg-black text-amber-50' : 'bg-amber-50 text-black'}`}>

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
            <span>{`0:00`}</span>
            <span>{songduration()}</span>
          </div>
        </div>
        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
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

        {allSongs.length > 0 && (
          <audio
            src={allSongs[currentIndex]?.file}
            ref={playerRef}
onTimeUpdate={songtiming}
            onEnded={handleNext} // optional: auto-play next song
          />
        )}   {/* yha audio me current song ka index diya he */}

      </div>

    </div>
  )
}

export default Musicbar