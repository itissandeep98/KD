import React, { Component } from 'react'
import { Card, CardHeader} from 'reactstrap'
import SchoolIcon from '@material-ui/icons/School';

export default class Event extends Component {
	render() {
		const { name } = this.props
		return (
			<Card className="eventcard">
				<CardHeader><SchoolIcon/> {name}</CardHeader>
				{/* <CardBody>
					<CardTitle>{resource}</CardTitle>
					<Row>
						<Col xs={12}>
						<strong>StartTime:</strong> <time>{startTime.time} {startTime.date.toDateString()}</time>
					</Col>
						<Col xs={12}>
							<strong>EndTime:</strong> <time>{endTime.time} {endTime.date.toDateString()}</time>
					</Col>
					</Row>
				</CardBody> */}
			</Card >
		)
	}
}
