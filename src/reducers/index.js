import {combineReducers} from 'redux';
import listComplete from "./listCompleteReducer";
import toDos from "./toDosReducer"

export default combineReducers({
    listComplete,
    toDos,
});