import React, { useEffect, useState } from 'react';
import axios from "axios";

const config = {
    headers:{
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc3OGE0MmVlMzQyYzBkZGViMmEzOWVlOWIxYWI5ZSIsInN1YiI6IjVjM2UzZTcyYzNhMzY4MTFiNDNlYjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vP-mCIEzUbTI8yH9Nri-46kaNCHOB_x-7xQQZf3MMMY'
    }
  };
function Trailer({movieData, movieIndex}) {
    let movieDataID = movieData[movieIndex].id 
    const [trailerData, setTrailerData] = useState({});
    const [trailerAvailable, setTrailerAvailable] = useState(true);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieDataID}/videos?language=en-US`, config).then((response) => {
            setTrailerData(response.data.results[0]);
            if (response.data.results.length > 0){
                setTrailerAvailable(true);
            }
            else{
                setTrailerAvailable(false);
            }
            // console.log(trailerData);
          }).catch(error => {
            setTrailerAvailable(false);
            // console.log(error);
          });
    }, [trailerData, movieDataID, movieIndex]);


    const trailerVideo = () =>{
        if (trailerAvailable === true){
            return <iframe src={'https://www.youtube.com/embed/' + trailerData.key + '?rel=0;autoplay=1&mute=1'} allow='autoplay'   title={movieDataID}></iframe>
        }
        else{
            return <h1>Video not available!</h1>
        }

    }

  return (
    <div className='movie-details'>
        <div className='movie-poster'>
            <div className='movie-screen'>
                {trailerVideo()}
                {/* <iframe src={'https://www.youtube.com/embed/' + trailerData.key + '?rel=0;autoplay=1&mute=1'} allow='autoplay'   title={movieDataID}></iframe> */}
            </div>
        </div>
    </div>
  )
}

export default Trailer