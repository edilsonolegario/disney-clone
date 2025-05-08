import React from 'react'
import disney from '../images/disney.png'
import marvel from '../images/marvel.png'
import nationalG from '../images/nationalG.png'
import pixar from '../images/pixar.png'
import starwar from '../images/starwar.png'

import starwarV from '../videos/star-wars.mp4'
import marvelV from '../videos/marvel.mp4'
import nationalGV from '../videos/national-geographic.mp4'
import pixarV from '../videos/pixar.mp4'
import disneyV from '../videos/disney.mp4'

function ProductionHouse() {
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: nationalG,
            video: nationalGV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwar,
            video: starwarV
        },
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item) => (
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300 
            ease-in-out cursor-pointer relative shadow-xl shadow-black
             '>
                <video src={item.video} autoPlay loop playsInline
                className='absolute top-0 rounded-md z-0 opacity-0
                hover:opacity-50'></video>
                <img src={item.image} className='w-full z-[1]' />               
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse