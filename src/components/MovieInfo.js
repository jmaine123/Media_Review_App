// import React, { useState } from 'react';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
// import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';

function MovieInfo({movieData, idx, setMovieIndex, searchTitle}) {
    let currentIdx = idx;
    let selectedMovie = movieData[currentIdx];
    let lengthofdata = movieData.length;

    const infodisplay = () => {
        if (selectedMovie){
            return(
            <div>
                <h6>Number of Results: {lengthofdata}</h6>
                <h1>{selectedMovie.title}</h1>
                <h3>{selectedMovie.release_date}</h3>
                <p>{selectedMovie.overview}</p>
                <p><span>Rating: </span>{selectedMovie.popularity}</p>

            </div>
            );
        }
        else{
            return(
                <div>
                    <h3>No results found from search term: {searchTitle} </h3>
                    <h4>Please adjust movie title and try again!</h4>
                </div>
            )
        }
    }
    console.log(selectedMovie)
  return (
    <div className='movie-info'>
        <div className='info-section'>
            {infodisplay()}
        </div>
    </div>
  )
}

export default MovieInfo;