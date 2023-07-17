import React, { useEffect, useState } from 'react';
import axios from "axios";

const config = {
    headers:{
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc3OGE0MmVlMzQyYzBkZGViMmEzOWVlOWIxYWI5ZSIsInN1YiI6IjVjM2UzZTcyYzNhMzY4MTFiNDNlYjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vP-mCIEzUbTI8yH9Nri-46kaNCHOB_x-7xQQZf3MMMY'
    }
  };
function Trailer({movieData, movieIndex}) {
    let selectedMovie = movieData[movieIndex];
    let movieDataID = selectedMovie.id 
    const [trailerData, setTrailerData] = useState('');

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieDataID}/videos?language=en-US`, config).then((response) => {
            setTrailerData(response.data.results[0]);
            // console.log(trailerData);
          }).catch(error => {
            // console.log(error);
          });
    }, [trailerData, movieDataID]);

  return (
    <div className='movie-details'>
        <div className='movie-poster'>
            <div className='movie-screen'>
                <iframe src={'https://www.youtube.com/embed/' + trailerData.key + '?rel=0;autoplay=1&mute=1'} allow='autoplay'   title={movieDataID}></iframe>     
            </div>
        </div>
    </div>
  )
}

export default Trailer