import React from 'react'

function MovieSearch({updateSearchTitle, searchTitle}) {
    // console.log(searchTitle)

  return (
    <div className='movie-search'>
        {/* <h1>{searchTitle}</h1> */}
        <form  className='movie-form' onSubmit={e => updateSearchTitle(e)}>
            <input
              type='text'
              className='input'
              name='title'
              id='title'
              placeholder="Please enter movie or show title"
            />
            <button className='search-btn'>Search Movie</button>
          </form>

    </div>
  )
}

export default MovieSearch;