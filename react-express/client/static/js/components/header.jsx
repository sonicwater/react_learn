import React from 'react';

export default class Header extends React.Component{

	clickHandler(){
		this.props.clickHeader();
	}
	
	render(){
		return(
			<div id="header">
				<header>
	      			<span onClick={this.clickHandler.bind(this)}>{this.props.title}</span>
				</header>
		  	</div>
		);
	}
}