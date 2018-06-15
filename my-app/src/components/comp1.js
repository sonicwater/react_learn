import React from 'react';
import Twitter from './Twitter';
export default class TodoItem extends React.Component{
    constructor(){
        super();
        this.state = {
            value : [1,2,3]
        }
    }
    handleSubmit = () => {
        this.setState({
            value:this.inputValue.value
        },()=>{
            this.inputValue.value = "";
        });
        
    }
    render () {
        return (
            <div>
                {this.state.value} <br />
                <input type='text' ref={(val) => this.inputValue = val} />
                <button onClick={this.handleSubmit} type='button'>Submit</button>
                <Twitter username='tylermcginnis33'>
                    {(user) => user === null ? "loading" : "1"}
                </Twitter>
            </div>
        )
    }
}