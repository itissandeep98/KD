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
		document.removeEventListener("click", this.handleOutsideClick)
	}

	handleOutsideClick(event){
		var target=event.target
		if (target.parentElement.type === "button" || target.parentElement.type === "select-one"){ // for calendar elements and timers
			target=target.parentElement
		}
		const excludingClasses = ["react-time-picker__button","react-time-picker__inputGroup__input","react-calendar__tile", "react-calendar__navigation__arrow", "react-calendar__navigation__label__labelText", "react-calendar__navigation__label"]
		var cond=true

		for (const element of excludingClasses) {
			cond=cond && !target.classList.contains(element)
		}

		if (this.popup && !this.popup.current.contains(target)  && cond && target.tagName!=="line") {
			// console.log(target);
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
		const {x,y,xpos,ypos,show,save,deletecard}=this.props
		const {event}=this.state
		
		const save1=(e,event)=>{
			this.cancelEvent(e)
			save(event)
		}
		return (
			<div style={{ left: xpos, top: ypos }} className="popup" ref={this.popup}>
				{(show && !event)&& <ListGroup>
					<ListGroupItem onClick={(e) => this.addNewEvent(e)}><span className="fa fa-plus" /> Add Event</ListGroupItem>
				</ListGroup>}
				{(show && event) && <NewEventCard cancel={this.cancelEvent} x={x} y={y} save={save1} deletecard={deletecard}/>}
			</div>
		)
	}

}
