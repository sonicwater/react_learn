import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Input from './components/input';

class App extends Component {
    
    render() {
        return (
            <div>
                <BrowserRouter basename="/">
                    <div>
                        <ul>
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/Input">Input</Link>
                            </li>
                        </ul>
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Input" component={Input} />
                    </div>
                </BrowserRouter>
            </div> 
        );
    }
}

export default App;