import React from 'react'
import { Card, CardBody, Button, CardHeader, Form, FormGroup, Label, Input, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, PopoverBody, UncontrolledPopover, InputGroup, InputGroupAddon } from 'reactstrap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function NewEventCard({ cancel }) {
	return (
		<div>
			<Card id="popupcard">
				<CardHeader>Edit Event</CardHeader>
				<CardBody>
					<Form>
						<FormGroup className="row">
							<Label className="col-3"> Name</Label>
							<Input className="col-8" type="text" />
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> Resource</Label>
							<UncontrolledDropdown className="col-8">
								<DropdownToggle caret />
								<DropdownMenu>
									<DropdownItem>Item 1</DropdownItem>
									<DropdownItem>Item 2</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> Start</Label>
							<InputGroup className="col-4">
								<Input />
								<InputGroupAddon addonType="append">
									<Button id="cal1" outline onClick={(e) => e.preventDefault()}><span className="fa fa-calendar fa-lg" /></Button>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="cal1">
										<PopoverBody className="calendarpopup">
											<Calendar />
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>

							<InputGroup className="col-4">
								<Input />
								<InputGroupAddon addonType="append">
									<Button id="tim1" outline onClick={(e) => e.preventDefault()}><span className="fa fa-history fa-lg" /></Button>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="tim1">
										<PopoverBody className="calendarpopup">
											Time
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> End</Label>
							<InputGroup className="col-4">
								<Input />
								<InputGroupAddon addonType="append">
									<Button id="cal1" outline onClick={(e) => e.preventDefault()}><span className="fa fa-calendar fa-lg" /></Button>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="cal1">
										<PopoverBody className="calendarpopup">
											<Calendar />
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup className="col-4">
								<Input />
								<InputGroupAddon addonType="append">
									<Button id="tim2" outline onClick={(e) => e.preventDefault()}><span className="fa fa-history fa-lg" /></Button>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="tim2">
										<PopoverBody className="calendarpopup">
											Time
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>
						</FormGroup>
						<Row>
							<Col>
								<Button color="info" onClick={cancel}>
									<span className="fa fa-plus" /> Save
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
