import { actionTypes } from "../actions"

export default (state=false,action)=>{
    switch(action.type){
        case(actionTypes.LIST_COMPLETE):
            return true;
        default:
            return state;        
    }
}