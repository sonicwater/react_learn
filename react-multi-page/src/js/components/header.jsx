import React from 'react';

export default class Header extends React.Component{
	
	render(){
		return(
			<header className={this.props.bgcolor}>
				<div className="container clearfix">
					<div className="logo"></div>
	      			<ul className="nav">
	      				<li>
	      					<a href='index.html'>Index</a>
	      				</li>
	      				<li>
	      					<a href='contact.html'>Contact</a>
	      				</li>
	      				<li>
	      					<a href='about.html'>About</a>
	      				</li>
	      			</ul>
				</div>
			</header>
		);
	}
}