import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list:[],
      value:""
    }
  }
  changeList(){
    this.setState({
<<<<<<< HEAD
      value:"",
      list:this.state.list.concat(this.state.value)
      
=======
      value:""
>>>>>>> 083e90a0c04c62115925c5060a27e018bbdb3aa4
    });
    this.setState({
      list:this.state.list.concat(this.state.value)
      
    });
  }
  changeHandler(event){
    this.setState({
      value:event.target.value
    });
  }
  delete(value){
    let arr = this.state.list;
    arr.splice(value.index,1);
    this.setState({
      list:arr
    });
  }
  render() {
    const data = this.state.list;
    return (
      <div className="App">
        <ul className="App-intro">
<<<<<<< HEAD
          {data.map((item,index)=>{
            return <li>{item}<button onClick={this.delete.bind(this,{index})}>delete</button></li>
          })}
=======
          {data.map((item,index)=><li key={index}>{item}<button onClick={this.delete.bind(this,{index})}>delete</button></li>)}
>>>>>>> 083e90a0c04c62115925c5060a27e018bbdb3aa4
        </ul>
        <input type="text" value={this.state.value} onChange={this.changeHandler.bind(this)} />
        <button onClick={this.changeList.bind(this)}>changeList</button>
      </div>
    );
  }
}

export default App;
