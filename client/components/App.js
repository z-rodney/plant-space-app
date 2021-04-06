import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SinglePlant from './SinglePlant'
import PlantList from './PlantList'
import Header from './Header'
import Login from './Login'
import Account from './Account'
import Home from './Home'
import Footer from './Footer'
import SignUp from './SignUp'
import { UserContext, useUser } from '../store/userContext'
import PrivateRoute from './utilComponents'

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
					<PrivateRoute exact path="/account" component={Account} />
					<Route exact path="/signup" component={SignUp}/>
					<Footer/>
				</UserContext.Provider >
			</Router>
		</>
	)
}

export default App
