import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Input from './components/input';
import Comp1 from './components/comp1';

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
                            <li>
                                <Link to="/Comp1">Comp1</Link>
                            </li>
                        </ul>
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Input" component={Input} />
                        <Route exact path="/Comp1" component={Comp1} />
                    </div>
                </BrowserRouter>
            </div> 
        );
    }
}

export default App;