import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class List extends React.Component{

	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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








