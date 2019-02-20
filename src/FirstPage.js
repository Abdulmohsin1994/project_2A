import React, { Component } from 'react';
import './App.css';
var moment = require('moment')
class FirstPage extends Component {
 
    state = {
        name:''
    }
    updateName =(e) => {
        // e.preventDefault();
        this.setState({ name : e.target.value})
        this.props.setName(this.state.name)
         console.log("Hi")
    }

    // updateInput = (e) => {
    //     this.setState({ name : e.target.value})
    // }


  
  render() {


    // setName = () => this.setState({name:})  

 
  

    return (
        <div>
        <div id="first">
        <form>
        <label id="name">Enter your name please</label>
      <input id="nameInput" type="text"  name="text" value={this.state.name} onChange={this.updateName} /> 
      <button id="butFi" onClick={this.props.changePage}>GO</button>
      </form>
      <small id="firstC"> &copy; Abdulmohsin , 2019</small>
      </div>
      < div id="long">
      <h1 id="time">{moment().format('h:mm A ')}</h1>
      <h1 id="date">{moment().format('MM-DD')  }</h1></div>
      </div>
     
    );
  }
}

export default FirstPage;
