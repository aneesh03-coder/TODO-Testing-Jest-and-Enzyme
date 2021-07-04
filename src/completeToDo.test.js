import React from 'react';
import {mount} from 'enzyme';
import App from "./App";
import { findByTestAttr } from './test/testUtils';

const setup=(state={})=>{
    //Need to hook up initial states based 
    //on redux or context API

    const wrapper=mount(<App/>);
    const inputBox=findTestAttr(wrapper,'input-box');
    inputBox.simulate('change',{target:{value:"This is the first to-do"}})
    const submitButton=findTestAttr(wrapper,'submit-button')
    submitButton.simulate('click',{preventDefault(){}})
    
    return wrapper;
}

describe.skip('When the tick/completed mark is clicked for single entry',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setup({
            listComplete:false,
            todoList:[]
        })
        const toDoTickMark=findByTestAttr(wrapper,'individualToDoCompleteStatus')
        toDoTickMark.simulate('click');
    })
    test("Removes the tick button",()=>{
        const toDoTickMark=findByTestAttr(wrapper,'individualToDoCompleteStatus') 
        expect(toDoTickMark.length).toBe(0)
    })
    test("Removes the delete button",()=>{
        const deleteIcon=findByTestAttr(wrapper,'delete') 
        expect(deleteIcon.length).toBe(0)
    })
    test("Removes the input component",()=>{
        const inputBox=findByTestAttr(wrapper,'input-box') 
        expect(inputBox.length).toBe(0)
    })
    test("Shows the Congrats component",()=>{
        const congratsMessage=findTestAttr(wrapper,'congrats-message')
        expect(congratsMessage.text()).toBe("Congratulations! You have successfully completed your List!")
    })
})