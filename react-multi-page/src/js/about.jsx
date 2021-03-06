import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import About from './components/about.jsx';

import '../css/common.css';
import '../css/layout.less';

class Main extends React.Component{
	render(){
		return(
			<div>
				<Header bgcolor="green" />
				<About/>
				<Footer/>
		  	</div>
		);
	}
}

ReactDOM.render(<Main/>,document.getElementById('mainContainer'));