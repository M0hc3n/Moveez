import React from 'react'
import { useGlobalContext } from '../context'
import Movie from './Movie'
import Loading from './Loading'

function MoviesList() {
  const {movies , loading} = useGlobalContext()

  if(loading){
    return <Loading /> 

  } 

  if( !movies ){
    return (
      <div className="no-result">
        <h1>Oups, no results were found ...</h1>
      </div>
    )
  }

  return (
    <section className="movies-list">
      {
        movies.map( (movie, index) =>{
          return(
            <Movie key={index} {...movie} />
          )
        })
      }
    </section>
  )
}

export default MoviesList