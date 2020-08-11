import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Popup({xpos,ypos,show}) {
	return (
		
		<div style={{left:xpos, top:ypos}} className="popup">
			{show && <ListGroup>
				<ListGroupItem  onClick={(e)=>console.log(e.target)}><span className="fa fa-plus"/> Add Event</ListGroupItem>
				</ListGroup>}
		</div>
	)

}
