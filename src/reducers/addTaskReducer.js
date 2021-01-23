import {ADD_TASK, DELETE_TASK, TASKS_DONE, TASK_INPUT} from '../actions/constants';

const initialState = {
    tasks: [],
    input: '',
    done: false
}

export function addTask(state= initialState, action){
    switch (action.type) {
        case TASK_INPUT:
            return {
                ...state,
                input: action.payload.input
            }

        case ADD_TASK:
            return {
                ...state,
               
                tasks: [
                    ...state.tasks,
                    {
                        task: action.payload.task,
                        key: Date.now()
                    }
                ],
                input: ''
            }
                
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item=> item.key !== action.payload.key)
            } 

        case TASKS_DONE:
            return {
                ...state,
                done: !state.done
            }
    
        default:
            return state
    }
}



