// import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MovieInfo({movieData, idx, setMovieIndex}) {
    let selectedMovie = movieData[idx];
    let lengthofdata = movieData.length;
    // const [mvindex, setMvindex] = useState(0);
    const updateMovieIndex = (direction) => {
        if (direction === "Left" && idx >= 0){
            setMovieIndex(idx-1);
        }
        if(direction ==="Left" && idx < 0){
            idx = (lengthofdata -1);
            setMovieIndex(idx);
        }
        if(direction === "Right" && idx > lengthofdata-1){
            idx = 0;
            setMovieIndex(idx);
        }
        else{
            setMovieIndex(idx+1);
        }
    }
    const releaseDate = "";
    console.log(selectedMovie)
  return (
    <div className='movie-info'>
        <h1>{selectedMovie.title}</h1>
        <h3>{releaseDate}</h3>
        <p>{selectedMovie.overview}</p>
        <p><span>Rating: </span>{selectedMovie.popularity}</p>
        <p><span>ID: </span>{selectedMovie.id}</p>

        <h1>{idx}</h1>
        <h3>Number of Results: {movieData.length}</h3>

        <div onClick={()=>{updateMovieIndex("Left")}}>
            <ArrowBackIcon />
        </div>

        <div onClick={()=>{updateMovieIndex("Right")}}>
            <ArrowForwardIcon />
        </div>

    </div>
  )
}

export default MovieInfo;