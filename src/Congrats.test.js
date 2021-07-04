import {shallow} from "enzyme"
import React from "react";
import Congrats from "./Congrats"
import {findByTestAttr} from "./test/testUtils"
// import checkPropTypes from "check-prop-types"
import {checkProps} from "./test/testUtils";

const defaultProps={listComplete:false}

const setup=(props={})=>{
    const setupProps={...defaultProps,...props}
    return shallow(<Congrats {...setupProps}/>)
}

test("renders without error",()=>{
    const wrapper=setup();
    const congratsComponent=findByTestAttr(wrapper,'component-congrats')
    expect(congratsComponent.exists()).toBe(true)
})

test("renders no text when 'listComplete' prop is false",()=>{
    const wrapper=setup({listComplete:false});
    const congratsComponent=findByTestAttr(wrapper,'component-congrats')
    expect(congratsComponent.length).toBe(1);
})

test("renders non empty congrats message when 'listComplete' prop is true",()=>{
    const wrapper=setup({listComplete:true});
    const message=findByTestAttr(wrapper,'congrats-message')
    expect(message.text()).toBe("Congratulations! You have successfully completed your List!");
})

test('does not throw an error with the expected props',()=>{
    const expectedProps={listComplete:false}
    checkProps(Congrats.propTypes,expectedProps);
})