import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Popup from './Popup'

export default class Center extends Component {
	constructor(props){
		super(props)
		
		const head=[]
		for (let i = 8; i <=17; i++) {
			head.push(i+":00")
			
		}
		const body=[]
		for (let i = 0; i < 35; i++) {
			const element = []
			for (let j = 0; j <= 9; j++) {
				element.push([])
			}
			body.push(element)
		}
		this.state={
			head:head,
			body:body,
			show:false,
			xpos:0,
			ypos:0,
			x:-1,
			y:-1
		}
		this.showPopup=this.showPopup.bind(this)
		this.hidePopup = this.hidePopup.bind(this)
		this.addElement=this.addElement.bind(this)
		this.popup = React.createRef();
	}

	showPopup(e){
		const target=e.target
		this.setState({
			show:true,
			xpos:target.offsetLeft+350,
			ypos: target.offsetTop + 68,
			x: e.target.parentNode.rowIndex - 2,
			y: e.target.cellIndex
		})
	}

	hidePopup(){
		this.setState({
			show:false
		})
	}

	addElement(el){
		const temp=this.state.body
		const {x,y}=this.state
		console.log(x,y);
		temp[x][y].push(el)
		this.setState({
			body:temp
		})
	}

	render() {
		return (
			<div className="col-6 col-lg-8  border tabs center" >
				<Popup {...this.state} hide={this.hidePopup} save={this.addElement}/>
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
							{this.state.head.map(t=>(
								<td colSpan={2} key={Math.random().toString()} className="border">{t}</td>
							))}
						</tr>
					</thead>
					<tbody>
						{this.state.body.map(row=>(
							<tr key={Math.random().toString()}>
								{row.map(cell=>(
									<td colSpan={2} onContextMenu={(e) => this.showPopup(e)} key={Math.random().toString()}>
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
