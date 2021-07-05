import moxios from 'moxios';
import {getQuotations,toDoCompleted,actionTypes} from "./index"

describe('toDoCompleted',()=>{
    test('returns an action with type `TO_DO_COMPLETED`',()=>{
        const action=toDoCompleted();
        expect(action).toStrictEqual({type:actionTypes.TO_DO_COMPLETED})
    })
})


describe('getQuotation',()=>{
    beforeEach(()=>{
        moxios.install();
    })
    afterEach(()=>{
        moxios.uninstall();
    })
    test('quotation is send from the function',()=>{
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:'My mama always said, life is like a box of chocolates. You never know what youre gonna get.'
            });
        });

        //update to test app in Redux/context sections
        return getQuotations()
            .then((quotation)=>{
                console.log(quotation)
                expect(quotation).toBe('My mama always said, life is like a box of chocolates. You never know what youre gonna get.')
            }).catch(error=>{throw error});        

    })
})