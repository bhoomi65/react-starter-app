import React, { Component } from 'react';
import './App.css';

export class PostListComponent extends Component{
		render() {
			return(
			<div className="card">
					<div className="card-body media">
					<div className="media-left">
						<img src={this.props.img}/>
					</div>
					<div className="media-body">
								<p><b>{this.props.title}</b></p>
								<p>{this.props.body}</p>
					</div>

					</div>
				</div>
		);
			}
		}

		export default PostListComponent;
