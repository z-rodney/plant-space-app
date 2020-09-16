import React from "react"
import axios from "axios"
import SinglePlant from './SinglePlant'
import PlantList from './PlantList'
import Header from './Header'

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
			<section id='main'>
				<Header />
				<section className='container'>
					{ this.state.selectedPlant.id ?
					( <SinglePlant selectedPlant={this.state.selectedPlant}/>
					) : <PlantList plants={this.state.plants}/>
					}
				</section>
			</section>
		)
	}
}
