import React , { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [showMenu , setShowMenu] = useState(false)


  return (
    <nav className="nav">
      <div className="logo">
        <h1>Mov<span>e</span>ez</h1>
      </div>
      <ul className={`${showMenu ? "show" : ""}`}>
        <li>
          <Link to='/' onClick={()=> setShowMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to='/about' onClick={()=> setShowMenu(false)}>About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setShowMenu( !showMenu)}>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navbar