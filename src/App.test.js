import React from 'react';
import {mount} from 'enzyme';
import { findByTestAttr,storeFactory } from './test/testUtils';
import App from './App';
import {Provider} from "react-redux"

//activate global mock to make sure getquotations doesnt make the network call

jest.mock('./actions');
import { getQuotations as mockGetQuotations } from './actions';
import { act } from 'react-dom/test-utils';

const setup= (initialState={listComplete:false})=>{
    const store=storeFactory(initialState);
  //We need to run mount because we are testing for useEffect also
    return  mount(<Provider store={store}><App/></Provider>);
}

test('renders without error', async  () => {
  let wrapper;
  act(()=>{
     wrapper=  setup();
  })
  
  const appComponent=findByTestAttr(wrapper,'component-app');
  expect(appComponent.exists()).toBe(true);
});

describe('allQuotations ',  ()=>{
  beforeEach(()=>{
    //clear the mock calls from previous tests
    mockGetQuotations.mockClear();
  })
  test('retrieved on app mount',  ()=>{
    let wrapper;
    act(()=>{
      wrapper=  setup();
    })
    expect(mockGetQuotations).toHaveBeenCalledTimes(1);
  })
  test('not retrieved on app update',   ()=>{
    let wrapper;
    act(()=>{
      wrapper=  setup();
    })
    mockGetQuotations.mockClear();

  //using setProps because wrapper.update does not trigger useEffect
      act(()=>{
        wrapper.setProps();
      });
    expect(mockGetQuotations).toHaveBeenCalledTimes(0);
  })
})
