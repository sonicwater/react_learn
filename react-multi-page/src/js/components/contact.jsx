import React from 'react';
import Lunbo from '../plugins/lunbo.js';
import '../../css/lunbo.less';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'

export default class Contact extends React.Component{
	constructor(prpos,context) {
        super(prpos,context);
        this.state = {
            title: "这里是联系页面"
        }
    }
	componentDidMount(){
		const Example = new Lunbo(document.getElementById("example"));
		Example.load();
	}
	render(){
		return(
			<div className="container clearfix">
				<div className="main">
      				<h2>{this.state.title}</h2>
      				<div class="viewport" id="example">
					  	<div class="father">
						    <div class="a"><img width="100%" src={banner1} /></div>
						    <div class="b"><img width="100%" src={banner2} /></div>
						    <div class="c"><img width="100%" src={banner3} /></div>
						    <div class="d"><img width="100%" src={banner2} /></div>
						    <div class="e"><img width="100%" src={banner1} /></div>

						    <div class="a"><img width="100%" src={banner1} /></div>
						    <div class="b"><img width="100%" src={banner2} /></div>
						    <div class="c"><img width="100%" src={banner3} /></div>
						    <div class="d"><img width="100%" src={banner2} /></div>
						    <div class="e"><img width="100%" src={banner1} /></div>

						    <div class="a"><img width="100%" src={banner1} /></div>
						    <div class="b"><img width="100%" src={banner2} /></div>
						    <div class="c"><img width="100%" src={banner3} /></div>
						    <div class="d"><img width="100%" src={banner2} /></div>
						    <div class="e"><img width="100%" src={banner1} /></div>
					  	</div>
					  	<div class="mother left">&lt;</div>
					  	<div class="mother right">&gt;</div>
					</div>
      			</div>
			</div>
		);
	}
}