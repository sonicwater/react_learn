import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Son from './son.jsx';

Son.propTypes = {
    number:PropTypes.number,
    array:PropTypes.array,
    boolean:PropTypes.bool
}

class Index extends React.Component{

	

	render(){
		return(
			<div>
				<Son number = {12} array = {[1,2,3]} boolean = {true} />
		  	</div>
		);
	}

}

ReactDOM.render(<Index/>,document.getElementById('app'));







