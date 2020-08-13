import React, { useState } from 'react'
import { Card, CardBody, Button, CardHeader, Form, FormGroup, Label, Input, Row, Col, PopoverBody, UncontrolledPopover, InputGroup, InputGroupAddon } from 'reactstrap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { IconButton } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import Event from './Event';

function NewEventCard({ cancel, save, deletecard }) {
	const [startTime, setStartTime] = useState({hh:"8",mm:"00"});
	const [endTime, setEndTime] = useState({ hh: "9", mm: "00" });
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [name, setName] = useState("")
	const [resource, setResource] = useState(1)
	const event = <Event name={name} resource={resource} startTime={{ time: startTime, date: startDate }} endTime={{ time: endTime, date: endDate }} deletecard={deletecard} />
	const maxDate = new Date()
	maxDate.setDate(maxDate.getDate() + 10)
	return (
		<div>
			<Card id="popupcard">
				<CardHeader>Edit Event</CardHeader>
				<CardBody>
					<Form>
						<FormGroup className="row">
							<Label className="col-3"> Name</Label>
							<Input className="col-8" type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> Resource</Label>
							<Input type="select" className="col-8" value={resource} onChange={(e) => setResource(e.target.value)} >
								<option disabled selected>Select From below</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Input>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> Start</Label>

							<InputGroup className="col-5">
								<Input value={startDate.toDateString()} readOnly />
								<InputGroupAddon addonType="append">
									<IconButton id="cal1" outline onClick={(e) => e.preventDefault()}><span className="fa fa-calendar fa-lg" /></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="cal1">
										<PopoverBody className="calendarpopup">
											<Calendar value={startDate} onChange={setStartDate} minDate={new Date()} maxDate={maxDate} />
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>

							<InputGroup className="col-3">
								<Input value={startTime.hh+":"+startTime.mm} readOnly />
								<InputGroupAddon addonType="append">
									<IconButton id="tim1" outline onClick={(e) => e.preventDefault()}><AlarmIcon /></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="tim1">
										<PopoverBody >
											<Row>
												<Col>
													<Input type="select" value={startTime.hh} onChange={(e) => setStartTime({...startTime,hh:e.target.value})}>
														{Array.from(Array(10).keys()).map(i => <option>{i + 8}</option>)}
													</Input>
												</Col>
												<Col>
													<Input type="select" value={startTime.mm} onChange={(e) => setStartTime({ ...startTime, mm: e.target.value })}>
														<option>00</option>
														<option>30</option>
													</Input>
												</Col>
											</Row>
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> End</Label>

							<InputGroup className="col-5">
								<Input value={endDate.toDateString()} readOnly />
								<InputGroupAddon addonType="append">
									<IconButton id="cal2" outline onClick={(e) => e.preventDefault()}><span className="fa fa-calendar fa-lg" /></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="cal2">
										<PopoverBody className="calendarpopup">
											<Calendar value={endDate} onChange={setEndDate} minDate={new Date()} maxDate={maxDate} />
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>

							<InputGroup className="col-3">
								<Input value={endTime.hh + ":" + endTime.mm} readOnly />
								<InputGroupAddon addonType="append">
									<IconButton id="tim2" outline onClick={(e) => e.preventDefault()}><AlarmIcon /></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="tim2">
										<PopoverBody >
											<Row>
												<Col>
													<Input type="select" value={endTime.hh} onChange={(e) => setEndTime({ ...endTime, hh: e.target.value })}>
														{Array.from(Array(10).keys()).map(i => <option>{i + 8}</option>)}
													</Input>
												</Col>
												<Col>
													<Input type="select" value={endTime.mm} onChange={(e) => setEndTime({ ...endTime, mm: e.target.value })}>
														<option>00</option>
														<option>30</option>
													</Input>
												</Col>
											</Row>
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>
						</FormGroup>

						<Row className="text-center">
							<Col>
								<Button color="info" onClick={(e) => save(e, event,startDate,startTime)}>
									<span className="fa fa-plus" /> Save
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
