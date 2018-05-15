import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter.jsx';
import counter from './reducers/index.js';

const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: '加' })}
    onDecrement={() => store.dispatch({ type: '减' })}
  />,
  document.getElementById('app')
);

render();
store.subscribe(render);
