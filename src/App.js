// import dotenv from 'dotenv';
import './App.css';
import React, { useState, useEffect} from 'react';
import axios from "axios";
import MovieSearch from './components/MovieSearch';
import MoviePoster from './components/MoviePoster';
import MovieInfo from './components/MovieInfo';
import Trailer from './components/Trailer';
// import Trending from './components/Trending';
import ChannelChanger from './components/ChannelChanger';
import ChannelNumbers from './components/ChannelNumbers';

// const API_KEY = process.env.REACT_APP_API_KEY;

// const API_KEY = '7916cad4';

function App() {
    const baseURL = 'https://api.themoviedb.org/3/search/multi?query=';
    const [searchTitle, setSearchTitle] = useState("");
    const [movieData, setMovieData] = useState("");
    // const [movieIndex, setMovieIndex] = useState(0);
    const [channel, setChannel] = useState(0);
    const [error, setError] = useState(null);
    const [display, setDisplay] = useState("Image");

    const updateMedium = (medium) =>{
        setDisplay(medium);
    }

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
            //   'Authorization': API_KEY,
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc3OGE0MmVlMzQyYzBkZGViMmEzOWVlOWIxYWI5ZSIsInN1YiI6IjVjM2UzZTcyYzNhMzY4MTFiNDNlYjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vP-mCIEzUbTI8yH9Nri-46kaNCHOB_x-7xQQZf3MMMY'
            }
        };
        // invalid url will trigger an 404 error
        axios.get(`${baseURL}${searchTitle}&include_adult=false&language=en-US&page=1`, config).then((response) => {
          setMovieData(response.data.results);
          setChannel(0);
          setDisplay("Image");
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
            return <MoviePoster movieData={movieData} movieIndex={channel}/>
        }
        else{
            return <Trailer movieData={movieData} movieIndex={channel}/>
        }
    }

    const mediumBtnDisplay = () =>{
        if (movieData.length > 0){
            return(
                <div className='medium-switch'>
                    <div className="medium-button" onClick={() =>{updateMedium("Trailer")}}>
                        <p>Trailer</p>
                    </div>
                    <div className="medium-button" onClick={() =>{updateMedium("Image")}}>
                        <p>Poster</p>
                    </div>
                </div>
            )

        }
        else{
            return(
                <div className='medium-switch'>
                    <div className='medium-button'><p>Search</p></div>
                    <div className='medium-button'><p>Trending</p></div>
                </div>
            )
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
                <div className='remote-control'>
                    <MovieSearch updateSearchTitle={updateSearchTitle} />
                    <div>
                        {mediumBtnDisplay()}
                        {/* <Trending/> */}
                        <ChannelChanger channel={channel} setChannel={setChannel} movieData={movieData} />
                        <ChannelNumbers index={channel} setChannel={setChannel} setMovieData={setMovieData}/>
                    </div>
                </div>
            </div>
            <div className='grid-two'>
                {screenDisplay()}
                <MovieInfo movieData={movieData} idx={channel} setMovieIndex={setChannel} searchTitle={searchTitle} />
            </div>
        </div>
    </div>
  );
}

export default App;
