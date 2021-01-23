import React, { Component } from 'react'
import Flipmove from 'react-flip-move';
import {connect} from 'react-redux';
import {deleteTask} from '../src/actions/actions'


const mapStateToProps = state => {
  return {
    // key: state.removeTask.tasks.key,
    tasks: state.addTask.tasks
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (key) => dispatch(deleteTask(key))

  }
}

export class ToDoItems extends Component {
    
    render() {
        
        const { tasks, deleteItem } = this.props;
        const createItems = tasks.map(item => {
            return <li key={item.key} onClick={()=>deleteItem(item.key)}>{item.task}<i className="fa fa-trash-alt icon"></i></li>
        })
        
        return (
            <div className="itemDiv">
                
                <Flipmove duration={250} easing ={'ease-out'}>
                    {createItems}
                </Flipmove>        
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItems);

