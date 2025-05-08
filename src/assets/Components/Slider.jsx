import React, { useEffect, useRef, useState } from 'react';
import GlobalAPI from '../../Services/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos().then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth-110;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth-110;
    }
  };

  return (
    <div className="relative w-full px-16 py-4">
      {/* Slider Buttons */}
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={sliderLeft}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={sliderRight}
      />

      {/* Scrollable Content */}
      <div
        className="flex overflow-x-auto w-full scrollbar-hide"
        ref={elementRef}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {movieList.map((item) => (
          item.backdrop_path && (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
              alt={item.title || 'Movie'}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default Slider;
