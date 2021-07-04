import {filterToDoList,filterToDoList1} from "./index";

const toDoList=[
    {todo:"Hello World",completed:false},
    {todo:"New World",completed:false},
    {todo:"Blue eyes",completed:false},
    {todo:"bloody world",completed:false}
]

describe("Returns the correct filtered Todo List ",()=>{

    test("When toDo is deleted",()=>{
        const filteredList=filterToDoList(toDoList,"New World")
        expect(filteredList.length).toBe(3);
    })
  
    
})
test("When toDo is completed",()=>{
    const filteredList=filterToDoList1(toDoList,"Blue eyes")
    expect(filteredList.length).toBe(4);
})