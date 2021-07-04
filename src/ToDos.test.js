import React from 'react'
import {shallow} from 'enzyme'
import { findByTestAttr,checkProps } from './test/testUtils'
import ToDos from './ToDos'

const defaultProps={
    todoList:[
        {todo:"Hello World",completed:false},
    ]
}

const setup=(props={})=>{
    const setupProps={...defaultProps,...props};
    return shallow(<ToDos {...setupProps}/>)
}

test('does not throw warning with expected props',()=>{
    checkProps(ToDos,defaultProps);
})

test('Renders the Todos component without error',()=>{
    const wrapper=setup();
    const todoComponent=findByTestAttr(wrapper,'component-toDos');
    expect(todoComponent.length).toBe(1);
})

test('Renders the the main title without error',()=>{
    const wrapper=setup();
    const todoTitle=findByTestAttr(wrapper,'toDos-title');
    expect(todoTitle.text()).toBe('Your To Do List');
})

test('If there are no toDos entered, the toDo divs wont be there',()=>{
    const wrapper=setup({todoList:[]})
    const todo=findByTestAttr(wrapper,'todo');
    expect(todo.length).toBe(0);
})

describe('If there are toDos entered',()=>{
    describe('If there is one ToDo entered in the Todolist',()=>{
        let individualToDo;
            let individualToDoTitle;
            let individualToDoCompleteStatus;
            let individualToDoDeleteButton;
            
        describe('If the todo is not complete',()=>{
           
            beforeEach(()=>{
                    const wrapper=setup();
                    individualToDo=findByTestAttr(wrapper,'todo')
                    individualToDoTitle=findByTestAttr(wrapper,'title')
                    individualToDoCompleteStatus=findByTestAttr(wrapper,'individualToDoCompleteStatus');
                    individualToDoDeleteButton=findByTestAttr(wrapper,'delete')

            })
            test('There will be one todo existing in the component',()=>{
                    
                    expect(individualToDo.length).toBe(1);
            })
            test('There will be one title per todo',()=>{
                    expect(individualToDoTitle.length).toBe(1);
            })
            test('There will be one completeStatus tick per todo',()=>{
                expect(individualToDoCompleteStatus.length).toBe(1);
            })
            test('There will be one deleteButton per todo',()=>{
                expect(individualToDoDeleteButton.length).toBe(1);
        })
        })
        describe('If the todo is completed',()=>{
            
            beforeEach(()=>{
                
                const wrapper=setup({
                    todoList:[
                        {todo:"Hello World",completed:true},
                    ]
                })
                individualToDo=findByTestAttr(wrapper,'todo')
                individualToDoTitle=findByTestAttr(wrapper,'title')
                individualToDoCompleteStatus=findByTestAttr(wrapper,'individualToDoCompleteStatus');
                individualToDoDeleteButton=findByTestAttr(wrapper,'delete')
            })
            test('There will be one todo existing in the component',()=>{
                expect(individualToDo.length).toBe(1);
            })
            test('There will one title',()=>{
                expect(individualToDoTitle.length).toBe(1);
            })
            test('There will no completeStatus',()=>{
                expect(individualToDoCompleteStatus.text()).toBe("");
            })
            test('There will no deleteButton',()=>{
                expect(individualToDoDeleteButton.text()).toBe("");
            })
        })

    })
    test('If three toDO Items entered three todo item should be in the list',()=>{
        const todoList=[
            {todo:"Hello World",completed:true},
            {todo:"Hello World",completed:true},
            {todo:"Hello World",completed:true},
        ]

        const wrapper=setup({
            todoList
        })
        const toDoNode=findByTestAttr(wrapper,'todo');
        expect(toDoNode.length).toBe(todoList.length)
    })
})