import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Popup from './Popup'
import NewEventCard from './NewEventCard'

export default class Center extends Component {
	constructor(props){
		super(props)
		const head=[]
		for (let i = 8; i <= 17; i++) {
			head.push(i)
		}
		const body=[]
		for (let i = 0; i < 35; i++) {
			const element = []
			for (let j = 0; j <= 9; j++) {
				element.push("")
			}
			body.push(element)
		}
		this.state={
			head:head,
			body:body,
			show:false,
			xpos:0,
			ypos:0
		}
		this.showPopup=this.showPopup.bind(this)
		this.hidePopup = this.hidePopup.bind(this)
		this.popup = React.createRef();
	}

	showPopup(e){
		// console.log(e.target);
		const target=e.target
		this.setState({
			show:true,
			xpos:target.offsetLeft+350,
			ypos: target.offsetTop + 68
		})
	}
	hidePopup(){
		this.setState({
			show:false
		})
	}

	render() {
		return (
			<div className="col-6 col-lg-8  border tabs center" >
				<NewEventCard/>
				<Popup show={this.state.show} xpos={this.state.xpos} ypos={this.state.ypos} hide={this.hidePopup}/>
				<Table bordered className="text-center" onContextMenu={e => e.preventDefault()}>
					<thead>
						<tr>
							<td colSpan={20}>
								Mon 01 Dec
							</td>
						</tr>
					</thead>
					<thead>
						<tr>
							{this.state.head.map(t=>(
								<td colSpan={2}>{t}</td>
							))}
						</tr>
					</thead>
					<tbody>
						{this.state.body.map(row=>(
							<tr>
								{row.map(cell=>(
									<td colSpan={2} onContextMenu={(e)=>this.showPopup(e)}>
										{cell}
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
