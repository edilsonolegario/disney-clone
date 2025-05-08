import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function MovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
        <img src={IMAGE_BASE_URL + movie.poster_path} 
        className="w-[110px] md:w-[300px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        "/>
        <h3 className="w-[50px] md:w-[30px] text-[12px]">{movie.title}</h3>
        <p className="text-gray-400 text-[12px]">{movie.release_date}</p>
    </section>
  )
}

export default MovieCard