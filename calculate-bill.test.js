describe("The calculate bill function", function(){

it(" If two calls were made , it should return 5.5", function(){
    var calculateBill = calculateBtnClicked("call,call");

assert.equal(5.50, calculateBill.callOrSms())
});

//     it(" If warning level is reached , it should return the class name 'warning'", function(){
//         var calculateBill = calculateBtnClicked("call,call,call,call,call,call,call,call,call");
    
//         assert.equal("warning", calculateBill.warningLevel());
//     })

 });