import React from 'react'

import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

//importing App components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import MovieDetailed from './pages/MovieDetailed'
import Error from './pages/Error'


function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/movies/:id' element={<MovieDetailed/>} />
          <Route path='/*' element={<Error/>} />    
      </Routes>
    </BrowserRouter>
  )
}

export default App