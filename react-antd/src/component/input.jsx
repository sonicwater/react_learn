import React from 'react';

export default class Input extends React.Component{
	constructor(){
		super();
		this.state = {
			test:'我是子组件的按钮'
		}
	}
	render(){
		return(
				<button onClick={()=>{this.props.fu_test(this.state.test)}}>
					改变按钮的文字
				</button>
		)
	}
}

