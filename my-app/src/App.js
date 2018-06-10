import React, {Component} from 'react';
import Child from './components/child'

class App extends Component {
    constructor() {
        super();
        this.state = {
            value:"父组件的值"
        }
    }
    getChildVal(val){
        this.setState({
            value:val
        });
    }
    render() {
        return (
            <div>
                {this.state.value}
                <Child gcv={val=>this.getChildVal(val)} />
            </div> 
        );
    }
}

export default App;