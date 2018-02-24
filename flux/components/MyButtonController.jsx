import React from 'react';
import ListStore from '../stores/ListStore.js';
import ButtonActions from '../actions/ButtonActions.js';
import MyButton from './MyButton.jsx';

export default class MyButtonController extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	items: ListStore.getAll()
	    };
	}

  	componentDidMount() {
    	ListStore.addChangeListener(this._onChange.bind(this));
  	}

  	componentWillUnmount() {
    	ListStore.removeChangeListener(this._onChange.bind(this));
  	}

  	_onChange() {
    	this.setState({
      		items: ListStore.getAll()
    	});
  	}

	createNewItem(event){
	    ButtonActions.addNewItem('new item');
	}

	render(){
	    return(
	    	<MyButton 
	    		items={this.state.items} 
	    		onClick={this.createNewItem.bind(this)} 
	    	/>
	    );
	}
}















