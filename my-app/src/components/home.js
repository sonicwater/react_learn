import React, {Component} from 'react';
import ReactRouter from 'react-router';
import Child from './child';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            value:"父组件的值"
        }
    }
    setChildVal(){
        this.setState({
            value:"父组件的值"
        });
    }
    getChildVal(val){
        this.setState({
            value:val
        });
    }
    render() {
        return (
            <div>
                <p style={{color:'red'}}>来自父组件:{this.state.value}</p>
                <Child scv={this.state.value} gcv={val=>this.getChildVal(val)} />
                <button onClick={this.setChildVal.bind(this)}>从父组建向子组件传值</button>
            </div> 
        );
    }
}
