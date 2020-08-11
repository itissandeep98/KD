import React, { Component } from 'react'
import Header from './Header'
import LeftNav from './LeftNav'
import Center from './Center'
import RightNav from './RightNav'

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<div className="row">
						<LeftNav />
						<Center />
						<RightNav />
					</div>
				</div>
			</div>
		)
	}
}
