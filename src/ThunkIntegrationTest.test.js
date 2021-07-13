import {storeFactory} from "./test/testUtils";
import {addToDo,deleteTo,completeToDo} from "./actions/index"

describe('When addTodo dispatcher is triggered',()=>{
    const initialState={listComplete:false,toDos:[]}
    const store=storeFactory(initialState)
    const toDo="Eating breakfast in the morning"
    store.dispatch(addToDo(toDo));
    test('A todo gets added to the list of toDos',()=>{
        const newState=store.getState();
        const expectedState={
            ...initialState,
            toDos:[{todo:"Eating breakfast in the morning",completed:false}]
        }
        expect(newState).toEqual(expectedState);
    })
})

describe('When delete_TODO action gets dispatched',()=>{
    test('The respective to do gets deleted from the toDos',()=>{
        const toDo="Eating breakfast in the morning"
        const initialState={listComplete:false,toDos:[{todo:"Eating breakfast in the morning",completed:false}      ]}
        const store=storeFactory(initialState)
        store.dispatch(deleteTo(toDo));
        const newState=store.getState();
        const expectedState={
            ...initialState,
            toDos:[]
        }
        expect(newState).toEqual(expectedState);
       
    })

})

describe('When the completeToDO action gets dispatched',()=>{
    const initialState={
        listComplete:false,
        toDos:[
            {todo:"Eating breakfast in the morning",completed:false},
            {todo:"Eating dinner in the night",completed:true}
        ]
    }
    const toDo="Eating breakfast in the morning"
    const store=storeFactory(initialState)
    store.dispatch(completeToDo(toDo));
    const newState=store.getState();
    test('The listComplete state becomes true',()=>{
         expect(newState.listComplete).toBe(true);
    })
    test('All the listItems in the toDOs state become true',()=>{
         const length=newState.toDos.map(toDo=>{
             return toDo.completed == true
         }).length 
         expect(length).toBe(2);                     
    })
    
})