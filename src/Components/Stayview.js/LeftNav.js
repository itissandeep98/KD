import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { room } from '../../shared/roomData';

export default class LeftNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			room: room
		}
	}
	render() {
		return (
			<div className="col-3 col-lg-2 tabs left sidenav">
				<Table responsive onContextMenu={e => e.preventDefault()} >
					<thead>
						<tr className="text-center">
							<td>Room Types</td>
							<td>Room No.</td>
						</tr>
					</thead>
					<tbody>
						{this.state.room.map(r => (
							<tr key={r.num} id={"row" + r.num}>
								<td>
									<h5> <i className="fa fa-hotel d-inline" /> {r.type}</h5>
									{r.detail}
								</td>
								<td className="text-center">
									{r.num}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		)
	}
}

