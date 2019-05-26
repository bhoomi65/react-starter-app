import React, { Component } from 'react';
import './App.css';
import getData from './api';
import PostComponent from "./PostComponent";

class MainComponent extends Component {
	constructor(props) {
		super(props);
			this.state = {
				loading: true,
				postData: []
			};
		}

		componentDidMount(){
			let data = getData('https://jsonplaceholder.typicode.com/posts');
		
			data.then((post) =>{
				this.setState({
					loading: false,
					postData: post
				})
			})
		}
	render() {
		return (
			<div className="main">
			{this.state.loading  && <p>Loading..................</p>}
				{!this.state.loading && <PostComponent post={this.state.postData}/>}

			</div>
		);
	}
}

export default MainComponent;
