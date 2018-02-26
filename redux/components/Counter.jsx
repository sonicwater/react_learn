import React from 'react';

export default class Counter extends React.Component {

  	render() {
    	const { value, onIncrement, onDecrement } = this.props;
    	return (
      		<p>
		        <button onClick={onIncrement}> + </button>
        		<span> {value} </span>
        		<button onClick={onDecrement}> - </button>
      		</p>
    	)
  	}

}




























