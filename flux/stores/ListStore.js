import {EventEmitter} from 'events';
import assign from 'object-assign';

export default assign({}, EventEmitter.prototype, {
	items: [],

  	getAll() {
    	return this.items;
  	},

	addNewItemHandler(text) {
	  	this.items.push(text);
	},

	emitChange() {
	  	this.emit('change');
	},

	addChangeListener(callback) {
	  	this.on('change', callback);
	},

	removeChangeListener(callback) {
	  	this.removeListener('change', callback);
	}
})




















