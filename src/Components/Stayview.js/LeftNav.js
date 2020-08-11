import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { room } from '../../shared/roomData';

export default class LeftNav extends Component {
	render() {
		const rooms = room.map(r => (
			<tr>
				<td>
					<h5> <i className="fa fa-hotel d-inline" /> {r.type}</h5>
					{r.detail}
				</td>
				<td className="text-center">
					{r.num}
				</td>

			</tr>
		))
		return (
			<div className="col-3 col-lg-2 tabs ">
				<Table bordered responsive >
					<thead>
						<tr className="text-center">
							<td>Room Types</td>
							<td>Room No.</td>
						</tr>
					</thead>
					<tbody>
						{rooms}
					</tbody>
				</Table>
			</div>
		)
	}
}
