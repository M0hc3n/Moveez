import React from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {

  const { searchedFor, setSearchedFor } = useGlobalContext()


  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Start looking for some movies !</label>
      <input 
          type="text"
          id='search'
          value={searchedFor}
          onChange={(e) => setSearchedFor(e.target.value)} />
    </form>
  )
}

export default SearchForm