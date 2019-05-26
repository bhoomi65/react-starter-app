import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class LinkComponent extends Component {
	constructor(props){
		super(props)
		this.gotClicked = this.gotClicked.bind(this);
		this.state ={
			visited:false
		}
	}
	gotClicked(event) {
		event.preventDefault();
		console.log(event.target);
		this.setState({
			visited: !this.state.visited
		})
	}
	componentDidMount(){
		console.log('mounted')
	}

	render() {
		let lcolor = this.props.color;
		let isvisited = this.state.visited ? 'blue' :'white'
		const linkStyle= {
			color: isvisited
		}

		return (<div >
			<a style={linkStyle} href={this.props.url} onClick={this.gotClicked} >{this.props.tag}</a>
		</div>);
	}

}
LinkComponent.propTypes = {
	url: PropTypes.string,
	tag: PropTypes.string,
	color: PropTypes.string
}
