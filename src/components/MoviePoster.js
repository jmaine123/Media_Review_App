import React from 'react';

function MoviePoster({movieData, movieIndex}) {
  let selectedMovie = movieData[movieIndex];

  const moviePoster = () =>{
    if (movieData === " "){
        return <img className='movie-img' style={{background: 'black'}}alt=''/>
    }
    else if (movieData.length > 0){
        return <img className='movie-img' src={`https://image.tmdb.org/t/p/w500/${selectedMovie['poster_path']}`} alt=''/>
    }
  }
  return (
    <div className="movie-details">
        <div className='movie-poster'>
            <div className='movie-screen'>
                {moviePoster()}
            </div>
        </div>
    </div>
  )
}

export default MoviePoster;