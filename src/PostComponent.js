import React, { Component } from 'react';
import PostList  from './PostListComponent';
export default class PostComponent extends Component {
	render() {
		let postContainer = [];
		let post = this.props.post;
	
		if (post && post.length) {
			post.map((value, index) => {
				 const postImageUrl = `https://picsum.photos/id/${value.id}/100/100`;
				return postContainer.push(<PostList title={value.title} key={index} img={postImageUrl} body={value.body} />);
			});
		}
		return (<div className="PostComponent">
			<h1>Post List component</h1>
			{postContainer}
		</div>);
	}
}

      