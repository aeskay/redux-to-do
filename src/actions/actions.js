import {TASK_INPUT, ADD_TASK, DELETE_TASK, TASKS_DONE} from './constants';

export function taskInput(input){
    return{
        type: TASK_INPUT,
        payload: {
            input: input
        }
    }
}

export function addTask(task){
    return {
        type: ADD_TASK,
        payload: {
            task: task
        }
    }  
}

export function deleteTask(key){
    return {
        type: DELETE_TASK,
        payload: {
            key: key
        }
    }
}

export function tasksDone(){
    return {
        type: TASKS_DONE
    }
}