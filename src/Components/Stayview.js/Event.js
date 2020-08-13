import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap'

export default class Event extends Component {
	render() {
		const { name, resource,startTime,endTime } = this.props
		return (
			<Card >
				<CardHeader>{name}</CardHeader>
				<CardBody>
					<CardTitle>{resource}</CardTitle>
					<Row>
						<Col xs={12}>
						<strong>StartTime:</strong> <time>{startTime.time} {startTime.date.toDateString()}</time>
					</Col>
						<Col xs={12}>
							<strong>EndTime:</strong> <time>{endTime.time} {endTime.date.toDateString()}</time>
					</Col>
					</Row>
				</CardBody>
			</Card >
		)
	}
}
