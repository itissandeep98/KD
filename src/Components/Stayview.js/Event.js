import React, { Component } from 'react'
import { Card, CardHeader } from 'reactstrap'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from '@material-ui/core';

export default class Event extends Component {
	constructor(props){
		super(props)
		this.delete=this.delete.bind(this)
	}

	delete(e){
		var target = e.target
		while(target.tagName!=="TD"){
			target=target.parentNode
		}
		if(target.tagName==="TD"){
			const x=target.parentNode.rowIndex-2
			const y=target.cellIndex
			this.props.deletecard(x,y)
		}
	}

	render() {
		const { name } = this.props
		const dragStart = e => {
			const target = e.target;
			const data = {
				...this.props,
				x: target.parentNode.parentNode.rowIndex - 2, // original x y coordinates in table of the event
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
				<CardHeader> 
					{name}
					<IconButton className="float-right" onClick={(e)=>this.delete(e)}> <DeleteForeverIcon style={{color:"#fff"}} /> </IconButton> 
				</CardHeader>
				
			</Card >
		)
	}
}
