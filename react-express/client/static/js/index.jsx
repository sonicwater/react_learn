import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Input from './components/Input.jsx';
import List from './components/List.jsx';


class Index extends React.Component{
	constructor(props,context) {  
		super(props,context);
		this.state = {
        	now: Date.now(),
        	values:"sonic",
        	arr:[],
        	todos:[],
        	color:false
        }; 
    }

    //生命周期——组件渲染完成
    componentDidMount(){
    	//fetch请求数据
    	fetch('./api/list')
    	.then((response)=>response.json())
    	.then((json)=>{
      		console.log(json.data.list);
      		this.setState({
        		arr:json.data.list
        	});
      	});
    }

    submitFn(value){
    	const id = this.state.todos.length;
    	this.setState({
			todos: this.state.todos.concat({
				id:id,
				text:value
			})
    	});
    }

    deleteFn(id){
		let data = this.state.todos;
		this.setState({
			todos:data.filter((item)=>{
				if(item.id!==id){
					return item
				}
			})
		});
	}

	headerClick(){
		console.log("header");
	}

	changeColor(){
		this.setState({
			color:!this.state.color
		});
	}

	printValue(value){
		let item = this.state.arr;
			console.log(value);
	}

	render(){
		var arr = this.state.arr;
		var color = this.state.color;


		return(
			<div>
				<Header clickHeader={this.headerClick.bind(this)} title="这里是header" />
				<ul className="ul clearfix">
					{arr.length == 0 ?
						<li>loading...</li> : 
					arr.map((item,index)=>{
						return <li key={index} onClick={this.printValue.bind(this,item)}>{item}</li>
					})}
				</ul>

				<p style={{color: color ? 'red' : 'blue' }}>color</p>

				<input type="button" value="button" onClick={this.changeColor.bind(this)} />

				<Input submitFn={this.submitFn.bind(this)} />

				<List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(<Index/>,document.getElementById('mainContainer'));