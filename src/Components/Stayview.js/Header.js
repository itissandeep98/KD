import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap'

export default class Header extends Component {

	maxWindow() {
		if ((document.fullScreenElement && document.fullScreenElement !== null) ||
			(!document.mozFullScreen && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	}

	render() {
		return (
			<>
				<Navbar dark expand="md">
					<NavbarBrand className="mr-auto" href="/"><img src={process.env.PUBLIC_URL + '/logo192.png'} height="30" width="30" alt='icon' /> Stay View</NavbarBrand>
					<Nav navbar />
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Button onClick={() => this.maxWindow()}>
								<span className="fa fa-plus fa-lg" />
							</Button>
						</NavItem>
						<NavItem style={{ marginLeft: "10px" }}>
							<Button>
								<span className="fa fa-bullseye fa-lg" />
							</Button>
						</NavItem>
					</Nav>
				</Navbar>
			</>
		)
	}
}
