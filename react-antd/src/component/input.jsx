import React from 'react';

export default class Input extends React.Component{
	constructor(){
		super();
		this.state = {
			test:'test'
		}
	}
	render(){
		return(
			<button onClick={this.props.test}>
				{this.props.abc}
			</button>
		)
	}
}

