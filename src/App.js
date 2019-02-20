import React, { Component } from 'react';
import Task from './Task'
import pin from './pin.jpg';
import pen2 from './pen2.png';
import add from './add.png'
import erase from './erase.png'
import './App.css';
import swal from 'sweetalert';

import FirstPage from './FirstPage';
var moment = require('moment')
class App extends Component {
  state = {
    listData: {
       task:'',
       day:'',
       completed: 'false'
    },      
    Tasks: [
      
    ],

    activePage: "FirstPage",
    Name: null

   
  }
  
  
  // done = (event) => {
  //   let item = event.target.value;
  //   let indexItem =this.state.Tasks.indexOf(item);
  //   this.state.Tasks.splice(indexItem, 1)
  //   this.state.completed.push(item);
  //   console.log(this.state.completed)
  //   console.log(this.state.Tasks)
  //   this.forceUpdate();
  // }

  // return(){
  //   console.log("return")
  //   this.setState({listData: {
  //     completed:'false'}
  //   })
  // }

   setName = (name) => {
    
     this.setState({Name:name})
    }


  UpdateForm = (event) => {
    // get the value of the user state
  const newData  = event.target.value;
  // get oeginal state
  const orignalState  = this.state.listData
  // make a copy of orignal state
  const copy = Object.assign({}, orignalState)
  //Key for change between task and day *important*
  const key = event.target.name
  console.log(key)
  console.log(newData)
  // update the copy with datt
  copy[key] = newData
   //Update the state with new copy
    this.setState({listData:copy})
  }

  submitForm = (event) => {
    // Don't update the page
    event.preventDefault()
    if(this.state.listData.task !== ''){
   //clone the array
     const copy= this.state.Tasks.slice(0)

    //assgine the new copy to the array
    copy.push(this.state.listData)
    console.log(this.state.listData)
    //Upadate the state
    this.setState({
      Tasks: copy ,
      // Set the input text to empty.
      listData :{
        task:'',
        day:'',
        completed: 'false'
      }
      })  
    }
    else{
    return swal ( "Oops" ,  "YOU FORGET TO ADD A TASK!"  )
    }  
  }
   clearForm=   (event) => { this.setState({Tasks:[]}) }

   changeCompleted = (index) =>{
     console.log(index)
     // 1. copy the array of tasks
     const copyIndex = this.state.Tasks.slice(0)
     // 2. use the index to change that tasks completed property to done or false
     copyIndex[index].completed = 'done'
     // 3.  update the state with the new array
     this.setState({
      Tasks: copyIndex ,
     })
   }

   removeCompleted = () => {
     const newList = this.state.Tasks.filter( (task) => {
       // checking where is the tasks which are not completed. 
       console.log(task)
        if(task.completed === 'false') {
          return task;
        }
      })
    console.log(newList)
    this.setState({
      Tasks: newList
    })
  }

  changePage = () => {
    this.setState({ activePage: "Todo"})

   
  }

  render() {

    const TodoList = this.state.Tasks.map((task, index) =><div> 
     <Task taskData={task} index={index} changeCompleted={this.changeCompleted} />
     </div>)

    return (
      <div className='App'>
       {/* <a href= {<FirstPage/>} > Here</a> */}
      
        {/* <img  onClick={this.submitForm} id="pin" src={pin}  alt="pin"/> */}
      

    {this.state.activePage === "FirstPage" ?     <FirstPage changePage={this.changePage} setName={this.setName}/> : (
            <div>
            <h1 id="head">TODO LIST ..</h1>
       
            <div id="list">
    
            <form >
    
              <input type="text" name="task" id="text" onChange={this.UpdateForm} value={this.state.listData.task}> 
              </input>
    
              {/* <input type="text" name="day" id="l" onChange={this.UpdateForm} value={this.state.listData.day}> 
              </input>  */}
            <select placeholder="Selct day"name="day" onChange={this.UpdateForm} value={this.state.listData.day}>
              <option value="" disabled selected>Select a day</option>
              <option name="day" value="Sunday">Sunday</option>
              <option name="day" value="Monday">Monday</option>
              <option name="day" value="Tuesday">Tuesday</option>
              <option name="day" value="Wednesday">Wednesday</option>
              <option name="day" value="Thursday">Thursday</option>
              <option name="day" value="Friday">Friday</option>
              <option name="day" value="Saturday">Saturday</option>
            </select> 
            
            </form>
            
            <img  onClick={this.submitForm}  id="buttons" src={add}  alt="add"/>
            <img  onClick={this.clearForm}  id="buttons" src={erase}  alt="erase"/>
        
          {TodoList}
          <button id="completed" onClick={this.removeCompleted}> Delete Completed Tasks</button>
          
         
          <img   id="pen2" src={pen2}  alt="pen2"/>
          <small> &copy; Abdulmohsin , 2019</small>
         
          
                </div>
                < div id="long">
                
                <div id="line">
    
                 </div>
                <h2>
                  Hi , {this.state.Name}
                </h2>
               
              
    
                
                <h1 id="time">{moment().format('h:mm A ')}</h1>
                <h1 id="date">{moment().format('MM-DD')  }</h1>
                
        </div>
        </div>

    ) }

   
      </div>
    );
  }
}

export default App;
