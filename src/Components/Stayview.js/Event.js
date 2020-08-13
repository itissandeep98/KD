import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap'

export default class Event extends Component {
	render() {
		const { name, resource } = this.props
		return (
			<Card >
				<CardHeader>{name}</CardHeader>
				<CardBody>
					<CardTitle>{resource}</CardTitle>
				</CardBody>
				<CardFooter><Button>Delete</Button></CardFooter>
			</Card >
		)
	}
}
