import moxios from 'moxios';
import {getQuotations} from "./index"

// describe('toDoCompleted',()=>{
//     test('returns an action with type `TO_DO_COMPLETED`',()=>{
//         const action=listCompleted();
//         expect(action).toStrictEqual({type:actionTypes.LIST_COMPLETE})
//     })
// })


describe('getQuotation',()=>{
    beforeEach(()=>{
        moxios.install();
    })
    afterEach(()=>{
        moxios.uninstall();
    })
    test('quotation is send from the function', async ()=>{
          await  moxios.wait(async ()=>{
            const request=await moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:'My mama always said, life is like a box of chocolates. You never know what youre gonna get.'
            });
        });

        //update to test app in Redux/context sections
        return await  getQuotations()
            .then((quotation)=>{
                expect(quotation).toBe('My mama always said, life is like a box of chocolates. You never know what youre gonna get.')
            }).catch(error=> error);        

    })
})