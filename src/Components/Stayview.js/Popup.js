import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import NewEventCard from './NewEventCard'

export default class Popup extends Component {

	constructor(props){
		super(props)
		this.state={
			event:false
		}
		this.popup=React.createRef()
		this.handleOutsideClick=this.handleOutsideClick.bind(this)
		this.addNewEvent=this.addNewEvent.bind(this)
		this.cancelEvent=this.cancelEvent.bind(this)
	}

	componentDidMount(){
		document.addEventListener("click",this.handleOutsideClick)
	}
	componentWillUnmount(){
		document.removeEventListener("click")
	}

	handleOutsideClick(event){
		if (this.popup && !this.popup.current.contains(event.target)) {
			this.cancelEvent(event)
		}
	}

	addNewEvent(e){
		e.preventDefault()
		setTimeout(() => {
			this.setState({ event: true })
		}, 1);
	}
	cancelEvent(e){
		e.preventDefault()
		this.props.hide()
		this.setState({ event: false })
	}

	render() {
		const {xpos,ypos,show}=this.props
		const {event}=this.state
	
		return (
			<div style={{ left: xpos, top: ypos }} className="popup" ref={this.popup}>
				{(show && !event)? <ListGroup>
					<ListGroupItem onClick={(e) => this.addNewEvent(e)}><span className="fa fa-plus" /> Add Event</ListGroupItem>
				</ListGroup>:null}
				{(show && event) && <NewEventCard cancel={this.cancelEvent}/>}
			</div>
		)
	}

}
