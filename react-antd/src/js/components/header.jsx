import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, Message, Form, Input, Button, CheckBox, Modal } from 'antd';
import logo from '../../images/logo2.png';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane; 
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userId: 0
		};
	}

	setModalVisible(value){
		this.setState({modalVisible:value});
	}

	handleClick(e){
		if(e.key=="register"){
			this.setState({
				current:"register"
			})
			this.setModalVisible(true);
		}else{
			this.setState({
				current:e.key
			})
		}
	}

	handleSubmit(e){
		e.preventDefault();
		var myFeachOptions = {
			methods : 'GET'
		}
		var formData = this.props.form.getFieldValue();
		console.log(formData);
	}

	render(){
		return(
			<div>
				<header>
					<Row>
				      	<Col span={4}></Col>
				      	<Col span={4}>
				      		<a href="/" className="logo">
				      			<img src={logo} alt="logo" />
				      		</a>
				      	</Col>
				      	<Col span={12}>
				      		<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
        						<Menu.Item key="index">
        							<Icon type="home" />Index
        						</Menu.Item>
        						<Menu.Item key="contact">
        							<Icon type="contacts" />Contact
        						</Menu.Item>
        						<Menu.Item key="about">
        							<Icon type="info-circle" />About
        						</Menu.Item>
        						<Menu.Item key="register" className="register">
									<Icon type="login" />Reg/Login
								</Menu.Item>
        					</Menu>

        					<Modal title="用户中心" warpClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel = {()=>this.setModalVisible(false)} onOk= {()=>this.setModalVisible(false)} okText="关闭">
        						<Tabs type="card">
        							<TabPane tab="注册" key="2">
										<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
											<FormItem label="用户名" hasFeedback>
												<Input type="text" placeholder="输入您的用户名"  />
											</FormItem>
											<FormItem label="密码" hasFeedback>
												<Input type="password" placeholder="输入您的密码"  />
											</FormItem>
											<FormItem label="确认密码" hasFeedback>
												<Input type="password" placeholder="请再次输入您的密码"  />
											</FormItem>
											<Button type="primary" htmlType="submit">注册
											</Button>
										</Form>
									</TabPane>
        						</Tabs>
        					</Modal>
				      	</Col>
				      	<Col span={4}></Col>
				    </Row>
				</header>
		  	</div>
		);
	};
}