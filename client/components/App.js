import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SinglePlant from './SinglePlant'
import PlantList from './PlantList'
import Header from './Header'
import Login from './Login'
import Account from './Account'

function App(){
	return (
		<Router>
			<Header/>
			<Route exact path="/plants" component={PlantList} />
			<Route exact path="/plants/:plantId" component={SinglePlant} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/account" component={Account} />
		</Router>
	)
}

export default App
