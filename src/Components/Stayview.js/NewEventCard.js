import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const NewEventCard = () => {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			
		</div>
	)
}

export default NewEventCard
