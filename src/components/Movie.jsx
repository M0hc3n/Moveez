import React from 'react'
import { Link } from 'react-router-dom'

const noImage = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

function Movie({Poster, Title, Year, imdbID }) {
  return (
      <section className='movie'>
        <Link to={`/movies/${imdbID}`}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
        <div className="movie-top">
          <img src={Poster ? Poster : noImage} alt="movie image" />
        </div>
        <div className="movie-bottom">
          <h4>
            {Title}
          </h4>
          <h6>
            {Year}
          </h6>
        </div>
      </section>
    
    
  )
}

export default Movie