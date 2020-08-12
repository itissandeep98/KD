import React from 'react'
import { Card, CardBody, Button, CardHeader, Form, FormGroup, Label, Input, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, PopoverBody, UncontrolledPopover } from 'reactstrap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function NewEventCard ({cancel}) {
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
							<UncontrolledDropdown className="col-8">
								<DropdownToggle caret/>
								<DropdownMenu>
									<DropdownItem>Item 1</DropdownItem>
									<DropdownItem>Item 2</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> Start</Label>
							<Button id="cal1" className="col-4" onClick={(e)=>e.preventDefault()}> cal</Button>
							<UncontrolledPopover trigger="legacy" placement="bottom" target="cal1">
								<PopoverBody>
									<Calendar />
								</PopoverBody>
							</UncontrolledPopover>
							<Input className="col-4" type="text" />
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> End</Label>
							<Button id="cal2" className="col-4" onClick={(e) => e.preventDefault()}> cal</Button>
							<UncontrolledPopover trigger="legacy" placement="bottom" target="cal2">
								<PopoverBody>
									<Calendar />
								</PopoverBody>
							</UncontrolledPopover>
							<Input className="col-4" type="text" />
						</FormGroup>
						<Row>
							<Col>
								<Button color="info" onClick={cancel}>
									<span className="fa fa-plus"/> Save
								</Button>
							</Col>
							<Col>
								<Button color="danger" onClick={cancel}> 
									<span className="fa fa-trash" /> Delete
								</Button>
							</Col>
							<Col>
								<Button onClick={cancel}>
									<span className="fa fa-times" /> Cancel
								</Button>
							</Col>
							
						</Row>
						

					</Form>	
				
				</CardBody>
			</Card>
			
		</div>
	)
}

export default NewEventCard
