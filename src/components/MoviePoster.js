import React from 'react';

function MoviePoster({movieData, movieIndex}) {
  let selectedMovie = movieData[movieIndex]
  return (
    <div className="movie-details">
        <div className='movie-poster'>
            <div className='movie-screen'>
                <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie['poster_path']}`} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default MoviePoster;