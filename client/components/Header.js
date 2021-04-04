import React from 'react'
import { Link } from 'react-router-dom'

const Header = function() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/account">My Account</Link>
      </nav>
    </header>
  )
}

export default Header
