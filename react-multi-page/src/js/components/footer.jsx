import React from 'react';

export default class Footer extends React.Component{
	
	render(){
		return(
			<footer>
				<div className="container clearfix">
	      			<ul className="footer-link">
	      				<li>
	      					<a href='terms.html'>Terms</a>
	      				</li>
	      				<li>
	      					<a href='privacy.html'>Privacy</a>
	      				</li>
	      				<li>
	      					<a href='help.html'>Help</a>
	      				</li>
	      			</ul>
					<div className="footer-logo"></div>
				</div>
			</footer>
		);
	}
}