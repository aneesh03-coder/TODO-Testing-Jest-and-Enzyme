import React from 'react';
import {mount} from 'enzyme';
import App from "./App";
import { findByTestAttr,storeFactory } from './test/testUtils';
import { Provider } from 'react-redux';

const setup=(initialState={listComplete:false})=>{
    //Need to hook up initial states based 
    //on redux or context API
    const store=storeFactory(initialState)
    const wrapper=mount(<Provider store={store}><App/></Provider>);
    const inputBox=findByTestAttr(wrapper,'input-box');
    inputBox.simulate('change',{target:{value:"This is the first to-do"}})
    const submitButton=findByTestAttr(wrapper,'submit-button')
    submitButton.simulate('click',{preventDefault(){}})
    
    return wrapper;
}

describe('When the tick/completed mark is clicked for single entry',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setup({
            listComplete:false,           
        })
        const toDoTickMark=findByTestAttr(wrapper,'individualToDoCompleteStatus')
        toDoTickMark.simulate('click');
    })
    test("Removes the tick button",()=>{
        const toDoTickMark=findByTestAttr(wrapper,'individualToDoCompleteStatus') 
        expect(toDoTickMark.text()).toBe("")
    })
    test("Removes the delete button",()=>{
        const deleteIcon=findByTestAttr(wrapper,'delete') 
        expect(deleteIcon.text()).toBe("")
    })
    test("Removes the input component",()=>{
        const inputBox=findByTestAttr(wrapper,'input-box') 
        expect(inputBox.length).toBe(0)
    })
    test("Shows the Congrats component",()=>{
        const congratsMessage=findByTestAttr(wrapper,'congrats-message')
        expect(congratsMessage.text()).toBe("Congratulations! You have successfully completed your List!")
    })
})