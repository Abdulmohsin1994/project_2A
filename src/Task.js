import React, { Component } from 'react';
import x from './x1.png'
import './App.css';

class Task extends Component {
    state ={
        botton: 'false',
        taskDone:'false'
        // completed: false
    }
    complete = () => {
        if (this.state.taskDone === 'false'){
           
          this.setState({taskDone: 'hide',botton:'hide' })
          

        } else {
          this.setState({taskDone: 'false'})
        }
      }
    // hide(){
    //     console.log("double")
    //     this.setState({taskDone:'hide'})
    // }

    //   rm = () => {
    //       console.log('remove')
       

    //   this.setState({taskDone: 'hide',
    //   botton:'hide'})
    //   }

    // remove(task){
    //     console.log("remove" , task )
    //     if(this.state.taskData === 'false')
    //     this.props.clearForm()
    // }

//     rmCompleted = () => {
//         if (this.state.taskDone === 'done'){
//     this.setState({taskDone: 'hide',
//     botton:'hide'})
//     }
// }




  render() {

             
    return (
        <div className="App">
       
        {/* <button className={this.state.botton} onClick={this.rm} > Delete</button>  */}
          <ul>
          
              <li id={this.state.taskDone} className={`${this.props.taskData.completed}`}  onClick={()=>this.props.changeCompleted(this.props.index)}  > {this.props.taskData.task}   At  {this.props.taskData.day}  <img id="x"src={x} alt="x"  className={this.state.botton} onClick={this.complete}/> </li>
               

               {/* <button onClick={this.rmCompleted}> Remove Completed</button>  */}
          </ul>
          {/* <button onClick={() => this.remove(this.props.taskData.task)} >Hi</button> */}
        </div>
      );
    }
  }
  
  export default Task;
  