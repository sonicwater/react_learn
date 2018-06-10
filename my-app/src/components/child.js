import React from 'react';

export default class Child extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			val:"子组件的值"
		}
	}
	render(){
		return(
			<div>
				<button onClick={() => this.props.gcv(this.state.val)}>从子组建向父组件传值</button>
			</div>
		)
	}
}