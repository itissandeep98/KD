import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Button, UncontrolledTooltip } from 'reactstrap'

export default class Header extends Component {

	maxWindow(e) {
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
							<Button onClick={(e) => this.maxWindow(e)} id="expandbtn" >
								<span className="fa fa-expand fa-lg" />
							</Button>
							<UncontrolledTooltip placement="bottom" target="expandbtn">
								Toggle Full Screen View
      						</UncontrolledTooltip>
						</NavItem>
						<NavItem style={{ marginLeft: "10px" }}>
							<Button aria-disabled>
								<span className="fa fa-magic fa-lg"/>
							</Button>
						</NavItem>
					</Nav>
				</Navbar>
			</>
		)
	}
}
