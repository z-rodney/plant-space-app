import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Home = () => {
  return (
    <div>
      <div >
        <div id="home-overlay">
          {/* <img src="/leaves.jpg"/> */}
          <div className="text-overlay">
            <h2>Plant Share - share plants with your friends</h2>
            <p>Plant Share  is a platform that encourages you to share your plants with your friends!</p>
            <Button variant="contained" component={Link} to="/signup">Sign up</Button>
          </div>
        </div>
        <div id="about">
          <h2>How does it work?</h2>
          <div className="col-container">
            <div className="col-5">
                <p className="center-text">1. 💻</p>
              <p>Sign up for an account.</p>
            </div>
            <div className="col-5">
              <p className="center-text">2. 🪴</p>
              <p>Fill out your profile with plants you are seeking or have available.</p>
            </div>
            <div className="col-5">
              <p className="center-text">3. 👥</p>
              <p>Add your friends.</p>
            </div>
            <div className="col-5">
              <p className="center-text">4. 📦</p>
              <p>Send and receive plants. </p>
            </div>
            <div className="col-5">
              <p className="center-text">5. 🔁</p>
              <p>Repeat steps 2 - 4 until there is no more space in your home for plants!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
