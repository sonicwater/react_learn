import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from './components/header.jsx';
import Input from './components/Input.jsx';
import List from './components/List.jsx';

class Index extends React.Component{
	constructor(props,context) {  
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	now: Date.now(),
        	p:1,
        	arr:[],
        	todos:[]
        }; 
    }

    clickHandler(){
    	this.setState({
			now: Date.now()
    	});
    };  

    componentDidMount(){
    	this.setState({
			arr: ["sonic","lily","xintong","这里是头"]
    	});
    }

    

    componentWillMount(){
    	console.log("组件挂载之前执行，只执行一次");
    }

    componentDidMount(){
    	console.log("组件渲染完成，只执行一次");
    }

    /**/

    componentWillRecevieProps(){
    	console.log("组件将要接收新的props执行");
    }

    shouldComponentUpdate(){
    	console.log("判断组件是否应该重新渲染，默认是true");
    }

    componentWillUpdate(){
    	console.log("组件将要重新渲染");
    }

    componentDidUpdate(){
    	console.log("组件重新渲染完成");
    }

    componentWillUnmount(){
    	console.log("卸载组件");
    }
	
	render(){
		var arr = this.state.arr;
		var color = false;
		return(
			<div>
				<Header title="这里是header" />
				<p onClick={this.clickHandler.bind(this)}>{this.state.now}</p>
				<p>{this.state.p}</p>
				<ul>
					{arr.length == 0 ?
						<li>loading...</li> : 
					arr.map((item,index)=>{
						return <li key={index}>{item}</li>
					})}
				</ul>
				<p style={{color: color ? 'red' : 'blue' }}>color</p>

				<Input submitFn={this.submitFn.bind(this)} />

				<List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)} />

		  	</div>
		);
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
}

ReactDOM.render(<Index/>,document.getElementById('app'));








