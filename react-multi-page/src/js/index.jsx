import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';

import '../css/common.css';
import '../css/layout.less';

class Index extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				<p>main</p>
		  	</div>
		);
	}
}

ReactDOM.render(<Index/>,document.getElementById('mainContainer'));