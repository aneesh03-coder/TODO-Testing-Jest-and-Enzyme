import { actionTypes } from "../actions"

export default (state=[],action)=>{
    switch(action.type){
        case(actionTypes.ADD_TODO):
            return [...state,
                action.payload];
        case(actionTypes.DELETE_TODO):
            return [...action.payload];
        case(actionTypes.TODO_COMPLETED):
            return [...action.payload];
        default:
            return state;        
    }
}