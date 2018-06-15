import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
    	<div>
    		<ul>
    			<li>
                    <Link to="/">Index</Link>
                </li>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
            </ul>
	      	<Switch>
	        	<Route path="/" exact component={IndexPage} />
	        	<Route path="/home" exact component={Home} />
	      	</Switch>
	    </div>
    </Router>
  );
}

export default RouterConfig;
