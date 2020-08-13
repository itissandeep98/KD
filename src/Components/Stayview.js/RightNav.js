import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { stats } from '../../shared/roomStats'

export default class RightNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			stats: stats
		}
	}

	render() {
		return (
			<div className="col-3 col-lg-2 tabs right sidenav">
				<Table responsive onContextMenu={e => e.preventDefault()}>
					<thead className="text-center">
						<tr>
							<td>Status</td>
							<td>No. of Rooms</td>
						</tr>
					</thead>
					<tbody>
						{this.state.stats.map(r => (
							<tr key={Math.random().toString()}>
								<td>
									{r.icon}
									{r.status}
								</td>
								<td className="text-center">
									{r.count}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		)
	}
}
