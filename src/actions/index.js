import axios from 'axios';
import {filterToDoList,filterToDoList1} from ".././helpers/index"

export const actionTypes={
    LIST_COMPLETE:'LIST_COMPLETE',
    ADD_TODO:'ADD_TODO',
    DELETE_TODO:'DELETE_TODO',
    TODO_COMPLETED:'TODO_COMPLETED'
}

// export const listCompleted=()=>{
//     return {type:actionTypes.LIST_COMPLETE};
// }

export const addToDo=(toDo)=>{
    return function(dispatch,getState){
        dispatch({
            type:actionTypes.ADD_TODO,
            payload:{todo:toDo,completed:false}
        })
    }
}
export const deleteTo=(toDo)=>{
    
    return function(dispatch,getState){
        const filteredList=filterToDoList(getState().toDos,toDo);
        console.log(filteredList)
        dispatch({
            type:actionTypes.DELETE_TODO,
            payload:filteredList
        })
    }
}
export const completeToDo=(toDo)=>{
    
    return function(dispatch,getState){
        const filteredList=filterToDoList1(getState().toDos,toDo);
        dispatch({
            type:actionTypes.TODO_COMPLETED,
            payload:filteredList
        })
        let notCompleted=0;
        console.log(filteredList)
        filteredList.map((todo)=>{
            if(!todo.completed){
                notCompleted+=1;
            }
        })
        
        if(notCompleted == 0){
            console.log("Is this getting called")
            dispatch({
                type:actionTypes.LIST_COMPLETE
            })
        }
        
    }
}




export const getQuotations=()=>{
    //return response from server
    return axios.get('https://type.fit/api/quotes')
        .then(response=>response.data)
            .catch(error=>{throw error})        
}

export const getQuotation=(quotations)=>{
    const randomNumber=Math.floor(Math.random()*50);
    return quotations[randomNumber].text;
}