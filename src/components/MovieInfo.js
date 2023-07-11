import React from 'react'

function MovieInfo({movieData}) {
    const releaseDate = " ";
  return (
    <div className='movie-info'>
        <h1>{movieData.Title}</h1>
        <h3>{releaseDate}</h3>
        <p>{movieData.Plot}</p>
        <p><span>Rating: </span>{movieData.imdbRating}</p>
        <p><span>Box Office: </span>{movieData.BoxOffice}</p>
    </div>
  )
}

export default MovieInfo;