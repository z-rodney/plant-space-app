import React from 'react'

const PlantList = (props) => {
  return (
    props.plants.map(plant => {
      return (
        <div key={plant.id} className="single-plant">
          <a href={`#${plant.id}`}>
            <img className="plant-img" src={plant.imgUrl} alt={`A picture of a ${plant.name}`}></img>
          <h2>{plant.name}</h2>
          </a>
        </div>
      )
    }
  )
  )
}

export default PlantList
