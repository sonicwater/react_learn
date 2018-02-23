import React from 'react';


export default class List extends React.Component{

	constructor(props,context){
		super(props,context);
	}

	clickHandler(id){
		this.props.deleteFn(id);
	}

	render(){
		const data = this.props.todos;
		return(
			<ul>
				{data.map((item,index)=>{
					return <li key={index} onClick={this.clickHandler.bind(this,item.id)}>{item.text}</li>
				})}
			</ul>
		);
	}
}
