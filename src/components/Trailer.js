import React, { useEffect, useState } from 'react';
import axios from "axios";

function Trailer({searchTitle}) {
    const[movieID, setMovieID] = useState("null");
    const[movieTitle, setMovieTitle]= useState(searchTitle);
    const[trailerKey, setTrailerKey] = useState('zcAEnnqnREc');
    const [trailerData, setTrailerData] = useState(null);

    const config = {
        headers:{
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc3OGE0MmVlMzQyYzBkZGViMmEzOWVlOWIxYWI5ZSIsInN1YiI6IjVjM2UzZTcyYzNhMzY4MTFiNDNlYjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vP-mCIEzUbTI8yH9Nri-46kaNCHOB_x-7xQQZf3MMMY'
        }
      };

    const updateTrailerKey = () =>{

    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}`).then((response) => {
            setTrailerData(response.data);
          }).catch(error => {
            console.log(error);
          });
    }, [searchTitle]);

  return (
    <div>
        <h1>{searchTitle}</h1>
        <iframe src={'https://www.youtube.com/embed/' + trailerKey + '?rel=0;autoplay=0'} title={searchTitle}></iframe>
    </div>
  )
}

export default Trailer