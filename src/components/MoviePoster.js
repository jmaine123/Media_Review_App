import React from 'react';

function MoviePoster({movieData}) {
  return (
    <div className="movie-details">
        <div className='movie-poster'>
            <div className='movie-screen'>
                <img src={movieData.Poster} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default MoviePoster