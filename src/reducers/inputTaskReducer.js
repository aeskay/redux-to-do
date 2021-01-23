import {TASK_INPUT} from '../actions/constants';


function addText(state={}, action){
    switch (action.type) {
        case TASK_INPUT:
            return {
                ...state,
                input: action.payload.input
            }
            
        default:
            return state
            
    }
}

export default addText