import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./Row.css";
import MovieDetails from './MovieDetails';
import { Link } from 'react-router-dom';

const key = '6c8d75f0';
const requests = {
  requestPopular: `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=marvel`,
  requestTopRated: `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=evil dead`,
  requestTrending: `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=titans`,
  requestUpcoming: `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=batman`,
};

const Row = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await axios.get(requests.requestPopular);
        const topRatedResponse = await axios.get(requests.requestTopRated);
        const trendingResponse = await axios.get(requests.requestTrending);
        const upcomingResponse = await axios.get(requests.requestUpcoming);

        setPopularMovies(popularResponse.data.Search || []);
        setTopRatedMovies(topRatedResponse.data.Search || []);
        setTrendingMovies(trendingResponse.data.Search || []);
        setUpcomingMovies(upcomingResponse.data.Search || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h2 className='title'>Popular Movies</h2>
      <Slider {...sliderSettings}>
        {popularMovies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: '10px' }}>
            <Link to={`/movie-details/${movie.imdbID}`} onClick={() => handleMovieClick(movie)}>
            <h3 className="movie-title"
            >{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: '300px', height: '305px' }}
            />
            </Link>
          </div>
        ))}
      </Slider>

      <h2 className='title'>Top Rated Movies</h2>
      <Slider {...sliderSettings}>
        {topRatedMovies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: '10px' }}>
              <Link to={`/movie-details/${movie.imdbID}`} onClick={() => handleMovieClick(movie)}>
            <h3 className="movie-title">{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: '300px', height: '305px' }}
            />
            </Link>
          </div>
        ))}
      </Slider>

      <h2 className='title'>Trending Movies</h2>
      <Slider {...sliderSettings}>
        {trendingMovies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: '10px' }}>
             <Link to={`/movie-details/${movie.imdbID}`} onClick={() => handleMovieClick(movie)}>
            <h3 className="movie-title">{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: '300px', height: '305px' }}
            />
            </Link>
          </div>
        ))}
      </Slider>

      <h2 className='title'>Upcoming Movies</h2>
      <Slider {...sliderSettings}>
        {upcomingMovies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: '10px' }}>
             <Link to={`/movie-details/${movie.imdbID}`} onClick={() => handleMovieClick(movie)}>
            <h3 className="movie-title">{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: '300px', height: '305px' }}
            />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Row;
