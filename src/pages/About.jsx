import React from 'react'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'

function About() {
  const {loading } = useGlobalContext()
  
  if(loading){
    return <Loading />
  }
  return (
    <section className='about'>
      <h1 className='about-title'>ab<span>o</span>ut</h1>
      <p className='about-info'>
        This website had been created using the Open Movie Database (OMDb). The idea was inspired by the projects made by <strong>John Smilga</strong>, feel free to visit his awesome works in <a href="https://react-projects.netlify.app/">here</a> .The Website works as a repository for movies, series and even documentaries. For contributing purposes, you are more than welcome to visit the <a href="https://github.com/Mohcen2311/Moveez">code </a> on the github repo.  <span >  ENJOY !</span>
      </p>
    </section>
  )
}

export default About