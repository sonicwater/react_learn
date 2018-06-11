import React from 'react';

export default class Child extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			inputValue:""
		}
	}
	change(e){
		this.setState({
			inputValue: e.target.value
		})
	}
	render(){
		return(
			<div>
				{this.state.inputValue}
				<input type="text" onChange={this.change.bind(this)} value={this.state.inputValue} />
			</div>
		)
	}
}