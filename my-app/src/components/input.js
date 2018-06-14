import React from 'react';
import InputChild from './inputChild';

export default class Child extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : "sonic"
		}
	}
	getDS(){
        //调用组件进行通信
        this.refs.getSwordButton.childMethod();
    }
	render(){
		return(
			<div>
				<InputChild name={this.state.name} ref="getSwordButton" />
				<button onClick={this.getDS.bind(this)}>调用子组件的方法</button>
			</div>
		)
	}
}