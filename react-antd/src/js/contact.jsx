import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/contact.jsx';

import '../css/common.css';
import '../css/layout.less';

class Main extends React.Component{
	render(){
		return(
			<div>
				<Header bgcolor="red" />
				<Contact/>
				<Footer/>
		  	</div>
		);
	}
}

ReactDOM.render(<Main/>,document.getElementById('mainContainer'));