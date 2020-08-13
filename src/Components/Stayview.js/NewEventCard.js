import React, { useState } from 'react'
import { Card, CardBody, Button, CardHeader, Form, FormGroup, Label, Input, Row, Col, PopoverBody, UncontrolledPopover, InputGroup, InputGroupAddon } from 'reactstrap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import { IconButton } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import Event from './Event';

function NewEventCard({cancel,save,deletecard }) {
	const [time, onChange] = useState('10:00');
	const [time1, onChange1] = useState('11:00');
	const [date, setDate] = useState(new Date())
	const [date1, setDate1] = useState(new Date())
	const [name, setName] = useState("")
	const [resource, setResource] = useState(1)
	const event = <Event name={name} resource={resource} startTime={{ time: time, date: date }} endTime={{ time: time1, date: date1 }} deletecard={deletecard}/>
	return (
		<div>
			<Card id="popupcard">
				<CardHeader>Edit Event</CardHeader>
				<CardBody>
					<Form>
						<FormGroup className="row">
							<Label className="col-3"> Name</Label>
							<Input className="col-8" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
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
								<Input value={date.toDateString()} readOnly/>
								<InputGroupAddon addonType="append">
									<IconButton id="cal1" outline onClick={(e) => e.preventDefault()}><span className="fa fa-calendar fa-lg" /></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="cal1">
										<PopoverBody className="calendarpopup">
											<Calendar value={date} onChange={setDate}/>
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>

							<InputGroup className="col-3">
								<Input value={time} readOnly/>
								<InputGroupAddon addonType="append">
									<IconButton id="tim1" outline onClick={(e) => e.preventDefault()}><AlarmIcon/></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="tim1">
										<PopoverBody >
											<TimePicker onChange={onChange}
												value={time}/>
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-3"> End</Label>

							<InputGroup className="col-5">
								<Input value={date1.toDateString()} readOnly/>
								<InputGroupAddon addonType="append">
									<IconButton id="cal2" outline onClick={(e) => e.preventDefault()}><span className="fa fa-calendar fa-lg" /></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="cal2">
										<PopoverBody className="calendarpopup">
											<Calendar value={date1} onChange={setDate1}/>
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>

							<InputGroup className="col-3">
								<Input value={time1} readOnly/>
								<InputGroupAddon addonType="append">
									<IconButton id="tim2" outline onClick={(e) => e.preventDefault()}><AlarmIcon/></IconButton>
									<UncontrolledPopover trigger="legacy" placement="bottom" target="tim2">
										<PopoverBody >
											<TimePicker onChange={onChange1}
												value={time1} 
												/>
										</PopoverBody>
									</UncontrolledPopover>
								</InputGroupAddon>
							</InputGroup>
						</FormGroup>
						<Row className="text-center">
							<Col>
								<Button color="info" onClick={(e)=>save(e,event)}>
									<span className="fa fa-plus" /> Save
								</Button>
							</Col>
							{/* <Col>
								<Button color="danger" onClick={cancel}>
									<span className="fa fa-trash" /> Delete
								</Button>
							</Col> */}
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
