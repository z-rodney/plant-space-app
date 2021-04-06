import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/userContext'

const Header = function () {
  const { state: { user: { username } } } = useContext(UserContext)

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        { username ?
          <>
            <Link to="/plants">Plants</Link>
            <Link to="/account">My Account</Link>
          </>
          : <>
              <Link to="/signup">Sign Up</Link>
            </>
        }
      </nav>
    </header>
  )
}

export default Header
