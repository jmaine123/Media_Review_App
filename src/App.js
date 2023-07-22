import './App.css';
import React, { useState, useEffect} from 'react';
import axios from "axios";
import MovieSearch from './components/MovieSearch';
import MoviePoster from './components/MoviePoster';
import MovieInfo from './components/MovieInfo';
import Trailer from './components/Trailer';

const API_KEY = process.env.REACT_APP_API_KEY

// const API_KEY = '7916cad4';

function App() {
    const baseURL = 'https://api.themoviedb.org/3/search/movie?query=';
    const [searchTitle, setSearchTitle] = useState("Entergalactic");
    const [movieData, setMovieData] = useState('');
    // let selectedMovie = '';
    const [movieIndex, setMovieIndex] = useState(0);
    const [error, setError] = useState(null);
    const display = "Trailer";
    // const [searchYear, setSearchYear] = useState('2000');
    // console.log(movieData);

    const updateSearchTitle = e => {
        e.preventDefault();
        const title = e.target.title.value;
        if (title) setSearchTitle(title);
        e.target.reset();
    };


    
    useEffect(() => {
        const config = {
            headers:{
              'accept': 'application/json',
              'Authorization': API_KEY
            //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc3OGE0MmVlMzQyYzBkZGViMmEzOWVlOWIxYWI5ZSIsInN1YiI6IjVjM2UzZTcyYzNhMzY4MTFiNDNlYjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vP-mCIEzUbTI8yH9Nri-46kaNCHOB_x-7xQQZf3MMMY'
            }
        };
        // invalid url will trigger an 404 error
        axios.get(`${baseURL}${searchTitle}&include_adult=false&language=en-US&page=1`, config).then((response) => {
          setMovieData(response.data.results);
        //   selectedMovie = movieData[0]
        }).catch(error => {
          setError(error);
        });
    }, [searchTitle]);

      
    if (error) return `Error: ${error.message}`;
    if (!movieData) return 'No title found';

    // console.log(movieData);
    // console.log(error);

    const screenDisplay = () => {
        if (display === "Image"){
            return <MoviePoster movieData={movieData} movieIndex={movieIndex}/>
        }
        else{
            return <Trailer movieData={movieData} movieIndex={movieIndex}/>
        }
    }


  return (
    <div className="App">
        <div className='app-header'>
            <h1>
                Movie Review
            </h1>
        </div>
        <div className='movie-grid'>
            <div className='grid-one'>
                <MovieSearch searchTitle={searchTitle}  updateSearchTitle={updateSearchTitle} />
                <MovieInfo movieData={movieData} idx={movieIndex} setMovieIndex={setMovieIndex} />
            </div>
            <div className='grid-two'>
                {screenDisplay()}
            </div>
        </div>
    </div>
  );
}

export default App;
