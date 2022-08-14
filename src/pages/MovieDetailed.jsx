import React from 'react'
import useFetch from "../useFetch"
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from './Error'

function MovieDetailed() {

  const  { id } = useParams()
  const{ loading, error, data: movie} = useFetch(`&i=${id}`)

  if(loading){
    return <Loading />
  }

  if(error.show){
    return <Error />
  }

  const {Title , 
          Year, 
          Runtime,
          Actors,
          Plot,
          Poster,
          Director,
          Genre: Type } = movie

  return (
    <div className='movie-detailed-wrapper'>
      <div className='movie-detailed'>
        <div className="movie-detailed-left">
          <img src={Poster} alt="movie poster" />
        </div>
        <div className="movie-detailed-right">
          <h2><span>Title :</span>{Title}</h2>
          <h3><span>Year :</span>{Year}</h3>
          <h4><span>Runtime :</span>{Runtime}</h4>
          <h5><span>Actors :</span>{Actors}</h5>
          <h5><span>Directed By :</span>{Director}</h5>
          <p><span>Type :</span>{Type}</p>
          <p><span>Plot :</span>{Plot}</p>
        </div>
      </div>
      <Link to='/' className='error-btn'>Main Menu</Link>
    </div>
  )
}

export default MovieDetailed