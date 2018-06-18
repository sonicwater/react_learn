import React from 'react';
import { Modal, Button } from 'antd';

export default class InputChild extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : this.props.name
		}
	}
	state = { visible: false }
	  	showModal = () => {
	    	this.setState({
	      	visible: true,
	    	});
	}
	handleOk = (e) => {
	    console.log(e);
	    this.setState({
	      	visible: false,
	      	name : "water"
	    });
	}
	handleCancel = (e) => {
	    console.log(e);
	    this.setState({
	      	visible: false,
	    });
	}
	childMethod(){
		this.setState({
			name : "water"
		})
        alert("组件之间通信成功");
    }
	render(){
		return(
			<div style={{display:'inline-block'}}>
				<h1>Hello {this.state.name}</h1>
				<Button onClick={this.showModal}>
					子组件的按钮
				</Button>
				<Modal
		          	title="调用子组件成功！"
		          	visible={this.state.visible}
		          	onOk={this.handleOk}
		          	onCancel={this.handleCancel}
		        >
		          	<p>要改变文字的值吗？</p>
		        </Modal>
			</div>
		)
	}
}