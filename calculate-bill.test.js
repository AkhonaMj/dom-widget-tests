describe("The calculate bill function", function(){

it(" If two calls were made , it should return 5.5", function(){
    var calculateBill = calculateBtnClicked("call,call");

assert.equal(5.50, calculateBill.callOrSms());

});

it("If two sms's were made , it should return 1.5 ", function(){
    var calculateBill = calculateBtnClicked("sms,sms");

assert.equal(1.50, calculateBill.callOrSms());

});

it("Should return a 'warning' class name if total reaches 20", function(){
    var calculateBill = calculateBtnClicked("call,sms,call,sms,sms,call,sms,call,sms,sms,call,sms,sms,sms");
   assert.equal(20.50, calculateBill.callOrSms());
   assert.equal("warning", calculateBill.warningLevel());
})
it("Should return a 'critical' class name if total reachs 30", function(){
    var calculateBill = calculateBtnClicked("call,call,call,call,call,call,call,call,call,call,call");

    assert.equal(30.25, calculateBill.callOrSms());
    assert.equal("critical", calculateBill.criticalLevel())
})
});
