import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './Main'

class Routing extends Component {
	render() {
		return (
			<div className="container-fluid" >
				<Switch>
					<Route path="/" component={()=> <Main/>}/>
					<Redirect to="/"/>
				</Switch>
			</div>
		)
	}
}

export default withRouter( Routing)