import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component{

	render(){
		return(
			<div>
				123
		  	</div>
		);
	}

}

if (module.hot) {  
    module.hot.accept()  
}  

ReactDOM.render(<Index/>,document.getElementById('app'));







