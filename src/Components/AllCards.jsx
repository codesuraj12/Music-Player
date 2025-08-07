import React from 'react'
import Card from './Card'

import { useContext } from 'react'
import { DarkModeContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import cards from '../data/CardData'

const AllCards = () => {
   const navigate = useNavigate()
   const{isDarkMode} = useContext(DarkModeContext)

  return (
    <>
    <div className={`flex flex-wrap gap-6 p-6 justify-center w-full h-full ${isDarkMode ? 'bg-black text-amber-50':''}`}>
 {cards.map((card)=>(
<Card
key={card.id}
img={card.img}
title={card.title}
desc={card.description}
onClick = {()=> navigate(`/card/${card.id}`)}
/>
 ))
 }
    </div>
</>
  )
}

export default AllCards