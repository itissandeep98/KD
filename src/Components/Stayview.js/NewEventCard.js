import React from 'react'
import { Card, CardBody, Button, CardHeader, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

const NewEventCard = () => {
	return (
		<div>
			<Card>
				<CardHeader>Edit Event</CardHeader>
				<CardBody>
					<Form>
						<FormGroup className="row">
							<Label className="col-3"> Name</Label>
							<Input className="col-8" type="text"/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> Resource</Label>
							<Input className="col-8" type="text" />
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> Start</Label>
							<Input className="col-4" type="text" />
							<Input className="col-4" type="text" />
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> End</Label>
							<Input className="col-4" type="text" />
							<Input className="col-4" type="text" />
						</FormGroup>
						<Row>
							<Col>
								<Button color="info"><span className="fa fa-plus"/> Save</Button>
							</Col>
							<Col>
								<Button color="danger"> <span className="fa fa-trash" /> Delete</Button>
							</Col>
							<Col>
								<Button><span className="fa fa-times" /> Cancel</Button>
							</Col>
							
						</Row>
						

					</Form>	
				
				</CardBody>
			</Card>
			
		</div>
	)
}

export default NewEventCard
