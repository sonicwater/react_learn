import React from 'react';
import Tab from '../plugins/tab.jsx';
import banner from '../../images/banner.jpg';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';


export default class Index extends React.Component{
	constructor(prpos,context) {
        super(prpos,context);
        this.state = {
            title: "这里是首页"
        }
    }
	render(){
		return(
			<div>
				<div className="container clearfix">
					<div className="main">
	      				<h2>{this.state.title}</h2>
	      				<img width="100%" src={banner} />
	      				<Tab>
		                    <div name = "first">
		                        <img width="100%" src={banner1} />
		                    </div>
		                    <div name = "second">
		                        <img width="100%" src={banner2} />
		                    </div>
		                    <div name = "third">
		                        <img width="100%" src={banner3} />
		                    </div>
		                </Tab>
	      			</div>
				</div>
			</div>
		);
	}
}