import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePlant = function () {
  const { plantId } = useParams()
  const [selectedPlant, setSelectedPlant] = useState({})
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    const fetchSinglePlant = async () => {
      const response = await axios.get(`/api/plants/${plantId}`)
      setSelectedPlant(response.data)
      setDataLoaded(true)
    }
    fetchSinglePlant()
  }, [])

  return(
    dataLoaded ?
    <div className="selected-plant-view">
      <div>
        <h2>{selectedPlant.name}</h2>
        <Link to='/'><h3>Back to Plant List</h3></Link>
      </div>
      <img className="selected-img" src={selectedPlant.imgUrl} alt={`A picture of a ${selectedPlant.name}`}></img>
      <div>
        <p><span className="plant-info"><span className="icon">ℹ️</span> About this plant:</span> {selectedPlant.detail.description}</p>
        <p><span className="plant-info"><span className="icon">☀️</span> Ideal lighting:</span> {selectedPlant.detail.light}</p>
        <p><span className="plant-info"><span className="icon">💧</span> When to water:</span> {selectedPlant.detail.wateringFrequency}</p>
      </div>
    </div>
    :
    <div>
      <p>Loading...</p>
    </div>
  )
}

export default SinglePlant
