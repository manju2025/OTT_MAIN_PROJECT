import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from './Navbar1';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieDetail.css';

const key = '6c8d75f0';
const requests = {
  requestUpcoming: `https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=movie`,
};

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.pathname.split('/').pop();
  console.log("Movie ID:", movieId);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${key}&h=highres`);
        const movieData = await movieResponse.json();
        setSelectedMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchUpcomingMovies = async () => {
      try {
        const upcomingResponse = await axios.get(requests.requestUpcoming);
        setUpcomingMovies(upcomingResponse.data.Search || []);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    if (movieId) {
      // Fetch movie details only if movieId is present
      fetchMovieDetails();
    }

    // Fetch upcoming movies regardless of movieId
    fetchUpcomingMovies();
  }, [movieId]);

  if (!selectedMovie) {
    console.log("No movie selected:", selectedMovie);
    return <div className="no-movie-selected">No movie selected</div>;
  }

  // Log the poster URL to the console
  console.log("Poster URL:", selectedMovie.Poster);

  // Check if the poster URL is valid
  if (!selectedMovie.Poster || selectedMovie.Poster === 'N/A') {
    console.log("No valid poster URL:", selectedMovie.Poster);
    return <div className="no-movie-poster">No poster available</div>;
  }

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="movie-details-container">
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="movie-poster" />
      <h2>{selectedMovie.Title}</h2>
      <p className="movie-plot">{selectedMovie.Plot}</p>
      <p>Year: {selectedMovie.Year}</p>
      <p>Director: {selectedMovie.Director}</p>
      <p>Actors: {selectedMovie.Actors}</p>
      <p>Plot: {selectedMovie.Plot}</p>
      <img className="ri-add-fill-icon1 alt" src="/32fef650-d748-46ed-a256-459e2dd16bd6_1708092302683693600.svg" /> 
      <div className="types">
        <div className="action">Action</div>
      </div>
      <div className="types1">
        <div className="action">Science Fiction</div>
      </div>
      <div className="types2">
        <div className="action">Suspense</div>
      </div>
      <div className="types3">
        <div className="action">Drama</div>
      </div>
      <br />
      <h3 className='maylike'>May like This</h3>
      <Slider {...carouselSettings}>
        {upcomingMovies.map((upcomingMovie) => (
          <div key={upcomingMovie.imdbID} style={{ margin: '20px' }}>
            <h4>{upcomingMovie.Title}</h4>
            <img
              src={upcomingMovie.Poster}
              alt={upcomingMovie.Title}
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        ))}
      </Slider>
      <Navbar1 />
    </div>
  );
};

export default MovieDetails;
