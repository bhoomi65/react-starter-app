import React, { Component } from 'react';

export default class NameForm extends Component {
	constructor(props) {
			super(props)
			this.state = {
				name:''
			}
		}
		
		handleChange = (event) => {
			this.setState({
				name:event.target.value
			});
		};
		onSubmit = (event) =>{
			event.preventDefault();
			console.log(event.target)
		};
	render() {
		return (
			<form className="form-inline" onSubmit={this.onSubmit}>
				<input type="text" value={this.state.name}  id="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.handleChange}/>
				
					<button type="submit" class="btn btn-danger" >Submit</button>
				</form>
		);
	};

}
