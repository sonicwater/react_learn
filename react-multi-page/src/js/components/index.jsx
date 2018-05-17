import React from 'react';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'

export default class Index extends React.Component{
	constructor(prpos,context) {
        super(prpos,context);
        this.state = {
            index: 0
        }
    }
	render(){
		return(
			<div>
				<div className="container clearfix">
					<div className="main">
	      				<h2>这里是首页</h2>

	      				<img src={banner1} />
	      				<img src={banner2} />
	      				<img src={banner3} /> 
	      			</div>
				</div>
			</div>
		);
	}
}