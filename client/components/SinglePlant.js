import React from 'react'

const SinglePlant = (props) => {
  return(
    <div className="selected-plant-view">
    <div>
    <h2>{props.selectedPlant.name}</h2>
    <a href='#'><h3>Back to Plant List</h3></a>
    </div>
    <img className="selected-img" src={props.selectedPlant.imgUrl} alt={`A picture of a ${props.selectedPlant.name}`}></img>
    <div>
      <p><span className="plant-info"><span className="icon">ℹ️</span> About this plant:</span> {props.selectedPlant.detail.description}</p>
      <p><span className="plant-info"><span className="icon">☀️</span> Ideal lighting:</span> {props.selectedPlant.detail.light}</p>
      <p><span className="plant-info"><span className="icon">💧</span> When to water:</span> {props.selectedPlant.detail.wateringFrequency}</p>
    </div>
  </div>
  )
}

export default SinglePlant
