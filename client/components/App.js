import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SinglePlant from './SinglePlant'
import PlantList from './PlantList'
import Header from './Header'
import Login from './Login'
import Account from './Account'
import Home from './Home'
import Footer from './Footer'
import { UserContext, useUser } from '../store/userContext'

function App(){
	return (
		<>
			<Router>
				<UserContext.Provider value={useUser()}>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/plants" component={PlantList} />
					<Route exact path="/plants/:plantId" component={SinglePlant} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/account" component={Account} />
					<Footer/>
				</UserContext.Provider >
			</Router>
		</>
	)
}

export default App
