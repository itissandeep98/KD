import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { stats } from '../../shared/roomStats'

export default class RightNav extends Component {
	render() {
		const rooms = stats.map(r => (
			<tr key={Math.random().toString()}>
				<td>
					{r.icon}
					{r.status}
				</td>
				<td className="text-center">
					{r.count}
				</td>

			</tr>
		))
		return (
			<div className="col-3 col-lg-2 tabs">
				<Table bordered responsive >
					<thead className="text-center">
						<tr>
							<td>Status</td>
							<td>No. of Rooms</td>
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
