import React from 'react';
import {mount} from 'enzyme';
import App from "./App";
import { findByTestAttr } from './test/testUtils';


const setup=(state={})=>{

    //TODO:Later on we need to apply the state to test the behaviour via
    //Redux or Context API

    const wrapper=mount(<App/>)
    //add a value to the input box
    const inputBox=findByTestAttr(wrapper,'input-box');
    inputBox.simulate('change',{target:{value:'I love this to-do app'}})
    //simulate a click on the submit button
    const submitButton=findByTestAttr(wrapper,'submit-button');
    submitButton.simulate('click',{preventDefault(){}})
    return wrapper;
}

describe.skip('no to-dos have been entered',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setup({
            listComplete:false,
            todoList:[],
        })
    })
    test('Creates a single entry within the ToDo List Container',()=>{
        const todoEnteries=findByTestAttr(wrapper,'todo')
        expect(todoEnteries).toHaveLength(1);
    })
})

describe.skip("Some To-Dos have been entered by the user",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setup({
            listComplete:false,
            todoList:[{todo:"Hello World",completed:false}],
        })
    })
    test('Creates two enteries into the todo list',()=>{
        const todoEnteries=findByTestAttr(wrapper,'todo');
        expect(todoEnteries).toHaveLength(2);
    })
})