import React from 'react';
import InputChild from './inputChild';
import { Button } from 'antd';
import { Row, Col, Layout, Menu, Icon } from 'antd';

export default class Child extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : "sonic"
		}
	}
	getDS(){
        //调用组件进行通信
        this.refs.getSwordButton.showModal();
    }
	render(){
		return(
			<div>
				<InputChild name={this.state.name} ref="getSwordButton" />
				<Button style={{display:'inline-block'}} type="primary" onClick={this.getDS.bind(this)}>调用子组件的方法</Button>
			</div>
		)
	}
}