import React from 'react';

export default class InputChild extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : this.props.name
		}
	}
	childMethod(){
		this.setState({
			name : "water"
		})
        alert("组件之间通信成功");
    }
	render(){
		return(
			<div>
				<h1>Hello {this.state.name}</h1>
				<button onClick={this.childMethod.bind(this)}>子组件</button>
			</div>
		)
	}
}