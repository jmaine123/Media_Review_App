import './App.css';
import React, { useState } from 'react';
import axios from "axios";
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import MovieInfo from './components/MovieInfo';

const API_KEY = process.env.REACT_APP_API_KEY.replace(";", "");

function App() {
    const baseURL = 'https://www.omdbapi.com/?t=';
    const [searchTitle, setSearchTitle] = useState(null);
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);
    // const [searchYear, setSearchYear] = useState('2000');
    // console.log(movieData);

    const updateSearchTitle = e => {
        e.preventDefault();
        const title = e.target.title.value;
        if (title) setSearchTitle(title);
        // e.target.reset();
      };

    
    React.useEffect(() => {
        // invalid url will trigger an 404 error
        axios.get(`${baseURL}${searchTitle}&apikey=${API_KEY}`).then((response) => {
          setMovieData(response.data);
        }).catch(error => {
          setError(error);
        });
    }, [searchTitle]);
      
    if (error) return `Error: ${error.message}`;
    if (!movieData) return 'No title found';

    console.log(movieData);
    console.log(error);


  return (
    <div className="App">
        <div className='app-header'>
            <h1>
                Movie Review
            </h1>
        </div>
        <div className='movie-grid'>
            <div className='grid-one'>
                <MovieSearch searchTitle={searchTitle}  movieData={movieData} updateSearchTitle={updateSearchTitle} />
                <MovieInfo movieData={movieData}/>
            </div>
            <div className='grid-two'>
                <MovieDetails movieData={movieData}/>
            </div>
        </div>
    </div>
  );
}

export default App;
