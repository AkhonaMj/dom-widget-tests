describe("The calculate bill function", function(){

it(" If two calls were made , it should return 5.5", function(){
    var calculateBill = calculateBtnClicked("call,call");

assert.equal(5.50, calculateBill.callOrSms())
})

});