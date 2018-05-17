import React from 'react';
import Lunbo from '../plugins/lunbo.js';
import '../../css/lunbo.less';

export default class Contact extends React.Component{
	componentDidMount(){
		const Example = new Lunbo(document.getElementById("example"));
		Example.load();
	}
	render(){
		return(
			<div>
				<div className="container clearfix">
					<div className="main">
	      				<h2>这里是联系页面</h2>
	      				<div class="viewport" id="example">
						  	<div class="father">
							    <div class="a">A12</div>
							    <div class="b">B12</div>
							    <div class="c">C12</div>
							    <div class="d">D12</div>
							    <div class="e">E12</div>

							    <div class="a">A12</div>
							    <div class="b">B12</div>
							    <div class="c">C12</div>
							    <div class="d">D12</div>
							    <div class="e">E12</div>

							    <div class="a">A12</div>
							    <div class="b">B12</div>
							    <div class="c">C12</div>
							    <div class="d">D12</div>
							    <div class="e">E12</div>
						  	</div>
						  	<div class="mother left">&lt;</div>
						  	<div class="mother right">&gt;</div>
						</div>
	      			</div>
				</div>
			</div>
		);
	}
}