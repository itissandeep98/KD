import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Popup from './Popup'
import Event from './Event'

export default class Center extends Component {
	constructor(props) {
		super(props)

		const head = []
		for (let i = 8; i <= 17; i++) {
			head.push(i + ":00")

		}
		const body = []
		for (let i = 0; i < 35; i++) {
			const element = []
			for (let j = 0; j <= 9; j++) {
				element.push([])
			}
			body.push(element)
		}
		this.state = {
			head: head,
			body: body,
			show: false,
			xpos: 0,
			ypos: 0,
		}
		this.showPopup = this.showPopup.bind(this)
		this.hidePopup = this.hidePopup.bind(this)
		this.addElement = this.addElement.bind(this)
		this.drop = this.drop.bind(this)
		this.deletecard = this.deletecard.bind(this)
		this.popup = React.createRef();
	}

	showPopup(e) {
		const target = e.target
		if (target.tagName === "path" || target.classList.contains("card-header")) { // disable popup on card right click
			return
		}

		this.setState({
			show: true,
			xpos: e.clientX,
			ypos: e.clientY
		})
	}

	hidePopup() {
		this.setState({
			show: false
		})
	}

	addElement(el,x,y) {
		const temp = this.state.body
		temp[x][y].push(el)
		this.setState({
			body: temp
		})
	}

	deletecard(x, y) {
		const temp = this.state.body
		temp[x][y] = []
		this.setState({
			body: temp
		})
	}

	drop(e) {
		e.preventDefault()
		const card_id = e.dataTransfer.getData('card_id');
		const props = JSON.parse(card_id)
		const card = <Event {...props} deletecard={this.deletecard} />;
		const temp = this.state.body
		temp[props.x_org][props.y_org] = temp[props.x_org][props.y_org].filter(el => el === card) // remove the original from state
		var x = e.target.parentNode.rowIndex - 2
		var y = e.target.cellIndex
		temp[x][y].push(card)
		this.setState({
			body: temp
		})
	}

	render() {

		const dragOver = e => {
			e.preventDefault()
		}

		return (
			<div className="col-6 col-lg-8  border tabs center" >
				<Popup {...this.state} hide={this.hidePopup} save={this.addElement} deletecard={this.deletecard} />
				<Table borderless className="text-center" onContextMenu={e => e.preventDefault()}>
					<thead>
						<tr>
							<td colSpan={20} key={Math.random().toString()} >
								{new Date().toDateString()}
							</td>
						</tr>
					</thead>
					<thead>
						<tr>
							{this.state.head.map(t => (
								<td colSpan={2} key={Math.random().toString()} className="timehead border">{t}</td>
							))}
						</tr>
					</thead>
					<tbody >
						{this.state.body.map(row => (
							<tr key={Math.random().toString()}>
								{row.map(cell => (
									<td
										colSpan={2}
										key={Math.random().toString()}
										onContextMenu={(e) => this.showPopup(e)}
										onDrop={this.drop}
										onDragOver={dragOver}
									>
										{cell.map(ev => (ev))}
									</td>))
								}
							</tr>
						))}
					</tbody>

				</Table>

			</div>
		)
	}
}
