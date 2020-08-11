import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class Center extends Component {
	render() {
		const head=[]
		const body=[]
		for (let i = 8; i <= 17; i++) {
			var element = <td>{i}</td>
			head.push(element)			
		}
		for (let i = 0; i < 50; i++) {
			const element=[]
			for (let j = 0; j <= 9; j++) {
				element.push(<td/>)
			}
			body.push(<tr>{element}</tr>)
		}

		return (
			<div className="col-6 col-lg-8 text-center border tabs">
				<Table borderless>
					<thead>
						<tr>
							<td colSpan={10}>
								Mon 01 Dec
							</td>
						</tr>
					</thead>
					<thead>
						<tr>
							{head}
						</tr>
					</thead>
					<tbody>
						{body}
					</tbody>

				</Table>
			</div>
		)
	}
}
