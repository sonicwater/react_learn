import React, { Component, PropTypes } from 'react';
export default class Twitter extends Component {
  	state = {
    	user: null,
  	}
  	render () {
    	return(
    		<div>
    			<p>{this.props.username}</p>
    			<p>test</p>
    		</div>
    	)
  	}
}