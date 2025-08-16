import React from 'react'
import Card from './Card'
import { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import cards from '../data/CardData'
import CardSkeleton from './CardSkeleton'

const AllCards = () => {
  const [cardsData, setCardsData] = useState([]) // Rename to avoid conflict

  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { isDarkMode } = useContext(DarkModeContext)

  const cardsRef = useRef([])


  // Simulate API call to load cards
  useEffect(() => {
    const loadCards = async () => {
      setLoading(true)

  


   // Load the cards data
        setCardsData(cards)
      // make another promise so get img quick

      const imgdata = cards.map((card) => {
          return new Promise((resolve) => {
            const img = new Image()
            img.src = card.img
            img.onload = resolve()
            img.onerror = resolve()
          })
        })
      
      await Promise.all(imgdata)


   
    
      setLoading(false)
    }
    loadCards()
  }, [])

  // scroll animation ke liye

  useEffect(() => {
    if (!loading && cardsData.length > 0) {


      const obeserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              // obeserver.unobserve(entry.target)
            }
          })

        }, { threshold: 0.4 })


      cardsRef.current.forEach((card) => {
        if (card) obeserver.observe(card)
      })
      return () => obeserver.disconnect();
    }
  }, [cardsData]
  );

  return (
    <>
      <div className={`flex flex-wrap gap-6 p-6 justify-center w-full h-full ${isDarkMode ? 'bg-black text-amber-50' : ''}`}>
        {loading ? (
        <>
            {Array.from({ length: 4 }).map((_, index) => (

              <CardSkeleton key={index} />
            )
            )
            }

         </>
        )
          : (
            <>

              {cardsData.map((card, index) => (
                <div key={card.id}
                  ref={(el) => (cardsRef.current[index] = el)}

                  className="fade-in-up"
                >

                  <Card

                    img={card.img}

                    title={card.title}
                    desc={card.description}
                    onClick={() => navigate(`/card/${card.id}`)}
                  />
                </div>
              ))
              }
            </>
          )}


      </div>
    </>
  )
}

export default AllCards