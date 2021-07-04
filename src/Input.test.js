import React from "react";
import Input from "./Input";
import {shallow} from "enzyme";
import { findByTestAttr } from "./test/testUtils";

const setup=(listComplete=false)=>{
    return shallow(<Input listComplete={listComplete}/>);
}



describe('state controlled input field',()=>{
    let originalUseState;
    let mockSetToDo=jest.fn();
    let wrapper;
    beforeEach(()=>{       
        mockSetToDo.mockClear();
        originalUseState=React.useState;        
    })
    afterEach(()=>{
        
        React.useState=originalUseState;
    })
    test('state updates with value of input box on change',()=>{
        React.useState=jest.fn(()=>["",mockSetToDo]);
        wrapper=setup();
        const inputBox=findByTestAttr(wrapper,'input-box');
        console.log(inputBox.debug())
        const mockOnChangeEvent={target:{value:"My first to-Do"}}
        inputBox.simulate('change',mockOnChangeEvent);
        expect(mockSetToDo).toHaveBeenCalledWith("My first to-Do");
    })
    test("state updates with an empty string when the submit button is clicked",()=>{
        React.useState=jest.fn((initialState)=>[initialState,mockSetToDo])
        const wrapper=setup();
        const submitButton=findByTestAttr(wrapper,"submit-button");
        submitButton.simulate('click',{preventDefault(){}});
        expect(mockSetToDo).toHaveBeenCalledWith("");
    })
})

describe('render',()=>{
    describe('listComplete is true',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setup(true);
        })
        test('Input renders without error',()=>{ 
            const inputComponent=findByTestAttr(wrapper,"component-input");
            expect(inputComponent.exists()).toBe(true);
        })
        test('Input box does not exist',()=>{
            const inputBox=findByTestAttr(wrapper,"input-box");
            expect(inputBox.exists()).toBe(false);
        })
        test('Submit Button does not exist',()=>{
            const submitButton=findByTestAttr(wrapper,"submit-button");
            expect(submitButton.exists()).toBe(false);
        })
    })
    describe('listComplete is false',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setup(false);
        })
        test('Input renders without error',()=>{
            const inputComponent=findByTestAttr(wrapper,"component-input");
            expect(inputComponent.exists()).toBe(true);
        })
        test('Input box does not exist',()=>{
            const inputBox=findByTestAttr(wrapper,"input-box");
            expect(inputBox.exists()).toBe(true);
        })
        test('Submit Button does not exist',()=>{
            const submitButton=findByTestAttr(wrapper,"submit-button");
            expect(submitButton.exists()).toBe(true);
        })
    })
})