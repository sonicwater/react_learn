import React from 'react';
import Lunbo from './lunbo.jsx';

export default class Contact extends React.Component{
	
	render(){
		return(
			<div>
				<div className="container clearfix">
					<div className="main">
	      				<h2>这里是联系页面</h2>
	      				<Lunbo/>
	      			</div>
				</div>
			</div>
		);
	}
}