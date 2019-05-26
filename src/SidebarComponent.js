import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { LinkComponent } from './LinkComponent';
//import NameForm from './NameForm'
const NameForm = React.lazy(() => import('./NameForm'));
class SidebarComponent extends Component {
	render() {
	let list = [];
	if (this.props.navList && this.props.navList.length){ this.props.navList.map((value, index) => {
		list.push(<li key={index}>
				<LinkComponent url={value.url} tag={value.tag} color={value.color}/>
			</li>)
		})
	}
		return (
			<div className="sidebar">
				<ul>
					{list}
				</ul>
				<Suspense fallback={<p>Loading...................</p>}>
					<NameForm/>
					</Suspense>
			</div>
		);
	}
}
export default SidebarComponent;
