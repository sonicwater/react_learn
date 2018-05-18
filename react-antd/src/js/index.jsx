import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Index from './components/index.jsx';
import 'antd/dist/antd.css';

import '../css/common.css';
import '../css/layout.less';

class Main extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				<Index/>
				<Footer/>
		  	</div>
		);
	}
}

ReactDOM.render(<Main/>,document.getElementById('mainContainer'));