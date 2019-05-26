import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class LinkComponent extends Component {
	render() {
		let lcolor = this.props.color;

		const linkStyle= {
			color: lcolor
		}

		return (<div >
			<a style={linkStyle} href={this.props.url}>{this.props.tag}</a>
		</div>);
	}

}
LinkComponent.propTypes = {
	url: PropTypes.string,
	tag: PropTypes.string,
	color: PropTypes.string
}
