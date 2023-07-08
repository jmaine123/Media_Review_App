import React from 'react'

function MovieInfo({movieData}) {
  return (
    <div>
        <h1>{movieData.Title}</h1>
        <h3>{movieData.Released}</h3>
        <p>{movieData.Plot}</p>
    </div>
  )
}

export default MovieInfo;