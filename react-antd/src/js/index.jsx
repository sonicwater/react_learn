import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../component/input.jsx';

class Index extends React.Component{
	constructor(){
		super();
		this.state = {
			list:[],
			value:""
		}
	}
	add(){
		let arr = this.state.list;
		arr.push(this.state.value);
		this.setState({
			value:"",
			list:arr
		})
	}
	change(e){
		this.setState({
			value:e.target.value
		});
	}
	delete(index){
		let arr = this.state.list;
		arr.splice(index,1);
		this.setState({
			list:arr
		});
	}
	test(){
		alert(123);
	}
    render(){
    	let data = this.state.list;
		return(
			<div>
				<ul>
					{data.map((item,index) => {
						return <li key={index} onClick={this.delete.bind(this,index)}>{item}</li>
					})}
				</ul>
				<input type="text" value={this.state.value} onChange={this.change.bind(this)} />
				<button onClick={this.add.bind(this)}>add</button>
				<Input abc={this.state.list} test={this.test.bind(this)} />
		  	</div>
		);
	}
}
ReactDOM.render(<Index/>,document.getElementById('app'));