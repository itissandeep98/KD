import React, { Component } from 'react'
import Header from './Header'
import LeftNav from './LeftNav'
import Center from './Center'
import RightNav from './RightNav'
import { Alert, AlertTitle } from '@material-ui/lab';

export default class Main extends Component {
	render() {
		return (
			<div>
				<div className="d-none d-md-block">
					<Header />
					<div className="container-fluid">
						<div className="row">
							<LeftNav />
							<Center />
							<RightNav />
						</div>
					</div>
				</div>
				<div className="d-md-none text-center" style={{height:"100vh"}}>
					<Alert severity="error" style={{ height: "100vh" }}>
						<AlertTitle>Error</AlertTitle>
						<strong>Not available for Small Screens </strong>
					</Alert>				
			</div>
			</div>
		)
	}
}
