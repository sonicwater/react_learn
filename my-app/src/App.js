import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Home from './components/home';
import Input from './components/input';
import Comp1 from './components/comp1';

class App extends Component {
    
    render() {
        return (
            <div className="ant-layout">
                <Row>
                    <Col span={24}>
                        <header className="ant-layout-header">header</header>
                    </Col>
                </Row>
                
                <BrowserRouter basename="/">
                    <Row className="ant-layout ant-layout-has-sider">
                        <Col span={4}>
                            <div className="ant-layout-sider ant-layout-sider-dark"> 
                                <ul>
                                    <li>
                                        <Link to="/Home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/Input">Input</Link>
                                    </li>
                                    <li>
                                        <Link to="/Comp1">Comp1</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={20}>
                            <div class="ant-layout-content ant-layout-sider-children">
                                <Route exact path="/Home" component={Home} />
                                <Route exact path="/Input" component={Input} />
                                <Route exact path="/Comp1" component={Comp1} />
                            </div>
                        </Col>
                    </Row>
                </BrowserRouter>
                <Row>
                    <Col span={24}>
                        <footer className="ant-layout-footer">footer</footer>
                    </Col>
                </Row>
            </div> 
        );
    }
}

export default App;