import React from 'react';
import Twitter from './Twitter';
import { Input, Button } from 'antd';
import { Row, Col, Layout, Menu, Icon } from 'antd';
const { Content } = Layout;
export default class TodoItem extends React.Component{
    constructor(){
        super();
        this.state = {
            value : [],
            inputVal : ""
        }
    }
    inputChange = (e) => {
        this.setState({
            inputVal:e.target.value
        });
    }
    handleSubmit = () => {
        let arr = this.state.value;
        arr.push(this.state.inputVal);
        this.setState({
            inputVal:"",
            value:arr
        })
    }
    delete = (index) => {
        let arr = this.state.value;
        arr.splice(index,1);
        this.setState({
            value:arr
        });
    }
    render () {
        const data = this.state.value;
        return (
            <div>
                <Row gutter={24}>
                    <Col className="gutter-row" span={6}>
                        <ul>
                            {data.map( ( item, index ) => {
                                return <li key={index} onClick={this.delete.bind(this,index)}>{item}</li>
                                })
                            }
                        </ul>
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