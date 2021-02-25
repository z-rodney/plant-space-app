import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SinglePlant from './SinglePlant'
import PlantList from './PlantList'
import Header from './Header'

function App(){
	return (
		<Router>
			<Header/>
			<Route exact path="/plants" component={PlantList} />
			<Route exact path="/plants/:plantId" component={SinglePlant} />
		</Router>
	)
}

export default App
