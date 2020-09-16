import React from "react"
import axios from "axios"

export default class App extends React.Component {
	constructor(){
		super(),
		this.state = {
			plants: [],
			selectedPlant: {}
		},
		this.loadPlant = this.loadPlant.bind(this)
	}

	async loadPlant(){
		const id = window.location.hash.slice(1)
		if (id) {
			const plant = (await axios.get(`/api/plants/${id}`)).data
			this.setState({
				selectedPlant: plant
			})
		} else {
			this.setState({
				selectedPlant: {}
			})
		}
	}

	async componentDidMount(){
		if (window.location.hash.slice(1)) {
			this.loadPlant()
		}

		const plants = (await axios.get('/api/plants')).data
		this.setState({ plants })

		window.addEventListener('hashchange', this.loadPlant)
	}

	render(){
		return (
			<section className='container'>
				{ this.state.selectedPlant.id ?
				(
					<div className="selected-plant-view">
						<div>
						<h2>{this.state.selectedPlant.name}</h2>
						<a href='#'><h3>Back to Plant List</h3></a>
						</div>
						<img className="selected-img" src={this.state.selectedPlant.imgUrl} alt={`A picture of a ${this.state.selectedPlant.name}`}></img>
						<div>
							<p><span className="plant-info"><span className="icon">ℹ️</span> About this plant:</span> {this.state.selectedPlant.detail.description}</p>
							<p><span className="plant-info"><span className="icon">☀️</span> Ideal lighting:</span> {this.state.selectedPlant.detail.light}</p>
							<p><span className="plant-info"><span className="icon">💧</span> When to water:</span> {this.state.selectedPlant.detail.wateringFrequency}</p>
						</div>
					</div>
				) :
					this.state.plants.map(plant => {
						return (
							<div key={plant.id} className="single-plant">
								<a href={`#${plant.id}`}>
									<img className="plant-img" src={plant.imgUrl} alt={`A picture of a ${plant.name}`}></img>
								<h2>{plant.name}</h2>
								</a>
							</div>
						)
					})
				}
			</section>
		)
	}
}
