import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './Stayview.js/Main'

class Routing extends Component {
	render() {
		return (
			<div >
				<Switch>
					<Route path="/" component={()=> <Main/>}/>
					<Redirect to="/"/>
				</Switch>
			</div>
		)
	}
}

export default withRouter( Routing)