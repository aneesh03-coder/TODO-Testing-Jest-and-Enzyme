export const filterToDoList=(toDoList,toDoToBeDeleted)=>{
    const filteredList=toDoList.filter((toDo)=>{
        
            return toDo.todo != toDoToBeDeleted
      
    })
    return filteredList;
}

export const filterToDoList1=(toDoList,completedList)=>{
    const filteredList=toDoList.filter((toDo)=>{
            return toDo.todo == completedList
    })
    filteredList[0].completed=true;
    return [...toDoList]
    
}


