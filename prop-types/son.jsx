import React from 'react';

export default class Son extends React.Component{

	

	render(){
		return(
			<div>
				{this.props.number}
              	<br/>
              	{this.props.array[1]}
              	<br/>
              	{this.props.boolean.toString()}
		  	</div>
		);
	}
}







