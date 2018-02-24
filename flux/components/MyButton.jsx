import React from 'react';

export default class MyButton extends React.Component{

	render(){

		const items = this.props.items;

		const itemHtml = items.map((listItem, i)=>{
	    	return <li key={i}>{listItem}</li>;
	  	});

	    return(
	    	<div>
	    		<button onClick={this.props.onClick.bind(this)}>
	    			Add New Item
	    		</button>
			    <ul>{itemHtml}</ul>
			</div>
	    );
	}
}















