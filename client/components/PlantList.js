import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PlantList = function () {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/plants')
      setPlants(response.data)
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      {plants.map(plant => {
        return (
          <div key={plant.id} className="single-plant">
            <Link to={`plants/${plant.id}`}>
              <img className="plant-img" src={plant.imgUrl} alt={`A picture of a ${plant.name}`}></img>
              <h2>{plant.name}</h2>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PlantList
