// import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MovieInfo({movieData, idx, setMovieIndex}) {
    let currentIdx = idx;
    let selectedMovie = movieData[idx];
    let lengthofdata = movieData.length;


    const updateMovieIndex = (direction) => {
        if (movieData.length === 1){
            currentIdx = 0;
        }
        else if (direction === "Left" && currentIdx > 0){
            let newIdx = currentIdx - 1;
            setMovieIndex(newIdx);
        }
        else if(direction ==="Left" && currentIdx <= 0){
            let newIdx = (lengthofdata -1);
            setMovieIndex(newIdx);
        }
        else if(direction === "Right" && currentIdx >= lengthofdata-1){
            let newIdx = 0;
            setMovieIndex(newIdx);
        }
        else{
            setMovieIndex(currentIdx+1);
        }
    }
    console.log(selectedMovie)
  return (
    <div className='movie-info'>
        <div className='info-section'>
            <h1>{selectedMovie.title}</h1>
            <h3>{selectedMovie.release_date}</h3>
            <p>{selectedMovie.overview}</p>
            <p><span>Rating: </span>{selectedMovie.popularity}</p>
            <p><span>ID: </span>{selectedMovie.id}</p>

            <h1>{currentIdx}</h1>
            <h3>Number of Results: {movieData.length}</h3>
        </div>

        <div className='index-arrows' style={lengthofdata < 2?{display:"none"}: {display:"grid"}}>
            <div onClick={()=>{updateMovieIndex("Left")}}>
                <ArrowBackIcon />
            </div>

            <div onClick={()=>{updateMovieIndex("Right")}}>
                <ArrowForwardIcon />
            </div>

        </div>


    </div>
  )
}

export default MovieInfo;