import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Input from './components/input';
import Comp1 from './components/comp1';
import { Row, Col, Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    
    render() {
        return (
            <Layout>
                <Header style={{ background: 'rgba(16, 142, 233, 1)' }}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    /> Header
                </Header>
                
                <BrowserRouter basename="/">
                    <Layout>
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}
                        >
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <Link to="/Home">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <Link to="/Input">Input</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <Link to="/Comp1">Comp1</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Route exact path="/Home" component={Home} />
                            <Route exact path="/Input" component={Input} />
                            <Route exact path="/Comp1" component={Comp1} />
                        </Content>
                    
                    </Layout>
                </BrowserRouter>
                <Footer style={{ background: 'rgba(16, 142, 233, 1)' }}>
                    Footer
                </Footer>
            </Layout>
                
        );
    }
}

export default App;