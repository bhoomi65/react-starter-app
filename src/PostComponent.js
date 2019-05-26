import React, { Component } from 'react';
import PostList  from './PostListComponent';
export default class PostComponent extends Component {
	render() {
		console.log(this.props.post);
		let postContainer = [];
		let post = this.props.post;
		if (post && post.length) {
			post.map((value, index) => {
				return postContainer.push(<PostList title={value.title} key={index} body={value.body} />);
			});
		}
		return (<div className="PostComponent">
			<h1>Post List component</h1>
			{postContainer}
		</div>);
	}
}
