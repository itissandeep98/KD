import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class RightNav extends Component {
	render() {
		return (
			<div className="col-3 text-center border tabs">
				<Table bordered responsive >
					<thead>
						<tr>
							<td>Status</td>
							<td>No. of Rooms</td>
						</tr>
					</thead>
				</Table>
			</div>
		)
	}
}
