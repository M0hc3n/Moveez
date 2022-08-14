import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <h1>Oups, an error has occured ...</h1>
      <Link to='/' className='error-btn'>back to home</Link>
    </div>
  )
}

export default Error