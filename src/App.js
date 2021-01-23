import './App.css';
import React, { Component } from 'react'
import ToDoItems from './ToDoItems';
import {connect} from 'react-redux';
import {taskInput, addTask, tasksDone} from '../src/actions/actions'


const mapStateToProps = state => {
  return {
    input: state.addTask.input,
    tasks: state.addTask.tasks,
    done: state.addTask.done
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: (event) => dispatch(taskInput(event.target.value)),
    handleSubmit: (input) => dispatch(addTask(input)),
    clearItems: () => dispatch(tasksDone())
  }
}

class App extends Component {

  state ={
    input: this.props.input,
    error: '',
  }

  submitInput = (e) => {
    const {input, handleSubmit} = this.props;
    if(input===''){
      this.setState({
        error: 'Please input a value!'
      })
    } else {
      handleSubmit(input); 
      this.setState({
        input: '',
        error:''
      })
    }
    e.preventDefault(); 
    
  }

  render() {
    const {inputChange, tasks, input, clearItems, done} = this.props;

    

    const taskCount = tasks.length;
    return (
      <div className="mainContainer">
        <div className="body">
          <div>
            <h1 className="title">To Do List</h1>
          </div>
          <div className="formDiv"> 
            <form onSubmit={this.submitInput}>
              <input 
                type="text" 
                value={input} 
                onChange={inputChange}
                placeholder="Input To do"
              />
              <button type="submit">Add</button>
            </form>
            <p className="error">{this.state.error}</p>
          </div>
          <div className="taskInfo">
          {done? (<h3 className="remain">0 task remaining</h3>):
          (
            <div>
              {taskCount <= 1 ? (<h3 className="remain">{taskCount} task remaining</h3>):(<h3 className="remain">{taskCount} tasks remaining</h3>)}
            </div>
          )
          }
          
          <span onClick={clearItems}>{done ? 'Undo': 'Mark all as done' }</span>
          </div>

          {done? (<h2 className="remain"><br/>All Tasks Done!</h2>):
          (<div className="itemsDiv">
            <ToDoItems/>
          </div>)
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
