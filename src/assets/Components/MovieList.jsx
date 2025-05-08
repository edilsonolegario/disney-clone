import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import GlobalAPI from '../../Services/GlobalAPI';
import MovieCard from './MovieCard';

const ITEMS_PER_PAGE = 6;

function MovieList({ genreId }) {
    const [movieList, setMovieList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        getMovieByGenreId();
    }, [genreId]);

    const getMovieByGenreId = () => {
        GlobalAPI.getMovieByGenreId(genreId).then((res) => {
            setMovieList(res.data.results);
            setStartIndex(0);
        });
    };

    const sliderRight = () => {
        const maxIndex = movieList.length - ITEMS_PER_PAGE;
        if (startIndex < maxIndex) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const sliderLeft = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="relative w-full px-16 py-4">
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={sliderLeft}
            />
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={sliderRight}
            />

            <div className="flex overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-300"
                    style={{
                        transform: `translateX(-${(100 / ITEMS_PER_PAGE) * startIndex}%)`,
                        width: `${(movieList.length / ITEMS_PER_PAGE) * 100}%`,
                    }}
                >
                    {movieList.map((item) => (
                        <div
                            key={item.id}
                            className="w-[calc(100%/6)] px-4 shrink-0"
                        >
                            <MovieCard movie={item} isLarge={true} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;

