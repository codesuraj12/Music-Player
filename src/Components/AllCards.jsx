import React from 'react'
import Card from './Card'
import Album from '/assets/album.jpg'

const AllCards = () => {
const cards = [
    {    
      id:1,
    img :Album,
 title: 'Album One',
    description: 'This is the first album description'
   },
    {
         id:2,
img :Album,
   title: 'Album Two',
      description: 'This is the second album description'
},
{
   id:3,
img :Album,
    title: 'Album Three',
     description: 'This is the third album description'
}

]

  return (
    <>
    <div className='flex flex-wrap gap-6 p-6 content-center'>
 {cards.map((card)=>(
<Card
key={card.id}
img={Album}
title={card.title}
desc={card.description}
/>
 ))
 }
    </div>
</>
  )
}

export default AllCards