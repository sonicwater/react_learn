import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component{
	constructor(){
		super();
		this.state = {
			list:[1,2,3,4]
		}
	}
    render(){
		return(
			<div>
				{this.state.list}
		  	</div>
		);
	}
}
ReactDOM.render(<Index/>,document.getElementById('app'));