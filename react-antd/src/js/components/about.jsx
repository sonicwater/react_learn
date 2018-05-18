import React from 'react';

export default class About extends React.Component{
	constructor(prpos,context) {
        super(prpos,context);
        this.state = {
            title: "这里是关于页面"
        }
    }
	render(){
		return(
			<div>
				<div className="container clearfix">
					<div className="main">
	      				<h2>{this.state.title}</h2>
	      			</div>
				</div>
			</div>
		);
	}
}