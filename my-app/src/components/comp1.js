import React from 'react';
import Twitter from './Twitter';
import { Input, Button } from 'antd';
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
                {this.state.value} <br />
                <Input value={this.state.inputVal} onChange={this.inputChange} />
                <Button onClick={this.handleSubmit}>Submit</Button>
                <Twitter username='tylermcginnis33'>
                    {(user) => user === null ? "loading" : "1"}
                </Twitter>
            </div>
        )
    }
}