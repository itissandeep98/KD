import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar dark expand="md">
					<NavbarBrand className="mr-auto" href="/"><img src={process.env.PUBLIC_URL + '/logo192.png'} height="30" width="30" alt='icon' /> Stay View</NavbarBrand>
					<Nav navbar />
					<Nav className="ml-auto" navbar>
						<NavItem>
							<span className="fa fa-plus fa-lg" />
						</NavItem>
						<NavItem style={{marginLeft:"10px"}}>
							<span className="fa fa-bullseye fa-lg" />
						</NavItem>
					</Nav>
				</Navbar>
			</>
		)
	}
}
