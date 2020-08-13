import React, { Component } from 'react'
import { Card, CardHeader } from 'reactstrap'
import SchoolIcon from '@material-ui/icons/School';

export default class Event extends Component {
	render() {
		const { name } = this.props
		const dragStart = e => {
			const target = e.target;
			const data = {
				...this.props,
				x: target.parentNode.parentNode.rowIndex - 2,
				y: target.parentNode.cellIndex
			}
			e.dataTransfer.setData('card_id', JSON.stringify(data))
			setTimeout(() => {
				target.style.display = "none"
			}, 0);
		}
		const dragOver = e => {
			e.stopPropagation()
		}
		return (
			<Card
				id={"card" + Math.random().toString()}
				className="eventcard"
				draggable
				onDragStart={dragStart}
				onDragOver={dragOver}
			>
				<CardHeader><SchoolIcon /> {name}</CardHeader>
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
