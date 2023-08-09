import React from 'react'

function MovieSearch({updateSearchTitle}) {
    // console.log(searchTitle)

  return (
    <div className='movie-search'>
        <form  className='movie-form' onSubmit={e => updateSearchTitle(e)}>
            <button className='search-btn'>Search</button>
            <input
              type='text'
              className='input'
              name='title'
              id='title'
              placeholder="Please enter movie title"
            />
          </form>

    </div>
  )
}

export default MovieSearch;