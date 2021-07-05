import { actionTypes } from "../actions";
import listCompleteReducer from "./listCompleteReducer";


test('when previous state is undefined, return false',()=>{
    const newState=listCompleteReducer(undefined,{});
    expect(newState).toBe(false);
})

test('Return previous state when unknown action type',()=>{
    const newState=listCompleteReducer(false,{type:'unknown'});
    expect(newState).toBe(false);
})

test('return true for action type LIST_COMPLETE',()=>{
    const newState=listCompleteReducer(false,{type:actionTypes.LIST_COMPLETE});
    expect(newState).toBe(true);
})