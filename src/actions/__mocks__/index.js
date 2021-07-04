
module.exports = {
    ...jest.requireActual('..'),
    __esModule:true,
    getQuotations:jest.fn(()=>Promise.resolve('Life is like a box of chocalate, you never no which one youre gonna get'))
}