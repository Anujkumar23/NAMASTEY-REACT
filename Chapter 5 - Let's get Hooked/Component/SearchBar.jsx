import React from 'react'

function SearchBar() {
  return (
    <div className='search-container'>
    <input className='search-input' type="text" placeholder='Search for restaurant...' />
    <button className='search-button'>Search</button>
</div>
  )
}

export default SearchBar