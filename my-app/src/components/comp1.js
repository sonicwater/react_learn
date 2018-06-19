import React from 'react';
import Twitter from './Twitter';
import { Input, Button } from 'antd';
import { Row, Col, Layout, Menu, Icon } from 'antd';
const { Content } = Layout;
export default class TodoItem extends React.Component{
    constructor(){
        super();
        this.state = {
            value : [1,2,3],
            inputVal : ""
        }
    }
    inputChange = (e) => {
        this.setState({
            inputVal:e.target.value
        });
    }
    handleSubmit = () => {
        this.setState({
            value:this.state.inputVal,
            inputVal : ""
        });
    }
    render () {
        return (
            <div>
                <Row gutter={24}>
                    <Col className="gutter-row" span={6}>
                        {this.state.value} <br />
                    </Col>
                </Row>
                 <Row gutter={24}>
                    <Col className="gutter-row" span={3}>
                        <Input value={this.state.inputVal} onChange={this.inputChange} />
                    </Col>
                    <Col className="gutter-row" span={1}>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Row>
                <Twitter username='tylermcginnis33'>
                    {(user) => user === null ? "loading" : "1"}
                </Twitter>
            </div>
        )
    }
}