describe("The bill with settings function", function(){

    it ("should be able to set the call cost", function(){

        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost())

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost())
});

it ("should be able to set the sms cost", function(){

    let settingsBill = billWithSettings();
    settingsBill.setSmsCost(0.85);
    assert.equal(0.85, settingsBill.getSmsCost())

    let settingsBill2 = billWithSettings();
    settingsBill2.setSmsCost(0.75);
    assert.equal(0.75, settingsBill2.getSmsCost())
});

it("should be able to set the call and sms cost", function(){
    let settingsBill = billWithSettings();
    settingsBill.setCallCost(2.75);
    settingsBill.setSmsCost(0.85);
    assert.equal(2.75, settingsBill.getCallCost());
    assert.equal(0.85, settingsBill.getSmsCost());

    let settingsBill2 = billWithSettings();
    settingsBill2.setCallCost(1.75);
    settingsBill2.setSmsCost(0.65);
    assert.equal(1.75, settingsBill2.getCallCost());
    assert.equal(0.65, settingsBill2.getSmsCost());
})

it("should be able to set the warning level", function(){

    let settingsBill = billWithSettings();
    settingsBill.setWarningLevel(20);
   assert.equal(20, settingsBill.getWarningLevel());


 });
 it("should be able to set the critical level", function(){

    let settingsBill = billWithSettings();
    settingsBill.setCriticalLevel(30);
   assert.equal(30, settingsBill.getCriticalLevel());


});

it("should be able to set the warning and the critical level", function(){
    let settingsBill = billWithSettings();
    settingsBill.setWarningLevel(20);
    settingsBill.setCriticalLevel(30);
    assert.equal(20, settingsBill.getWarningLevel());
    assert.equal(30, settingsBill.getCriticalLevel());

   
});

});
describe("Use Values", function(){

    it("should be able to use the call cost set", function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75,settingsBill.getTotalCost());
        assert.equal(6.75,settingsBill.getTotaCalllCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost())
    
    
    
    
});

it("should be able to use the call cost set for two calls at 1.35 each", function(){
    let settingsBill = billWithSettings();
    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);

    settingsBill.makeCall();
    settingsBill.makeCall();

    assert.equal(2.70,settingsBill.getTotalCost());
    assert.equal(2.70,settingsBill.getTotaCalllCost());
    assert.equal(0.00,settingsBill.getTotalSmsCost())

});
it("should be able to send two smses at 0.85 each", function(){
    let settingsBill = billWithSettings();
    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);

    settingsBill.sendSms();
    settingsBill.sendSms();

    assert.equal(1.70,settingsBill.getTotalCost());
    assert.equal(0.00,settingsBill.getTotaCalllCost());
    assert.equal(1.70,settingsBill.getTotalSmsCost())

});
it("should be able to send two smses at 0.85 each and make one call at 1.35", function(){
    let settingsBill = billWithSettings();
    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);

    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.makeCall();

    assert.equal(3.05,settingsBill.getTotalCost());
    assert.equal(1.35,settingsBill.getTotaCalllCost());
    assert.equal(1.70,settingsBill.getTotalSmsCost())

});
});

describe("Warming and Critical level", function(){
    it("Should return a class name if warning level is reached", function(){
        let settingsBill = billWithSettings();

        assert.equal("warning", settingsBill.totalClassName());
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);
    
       
        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

    })
    it("Should return a class name if critical level is reached", function(){
        let settingsBill = billWithSettings();

        assert.equal("critical", settingsBill.totalClassName());
        settingsBill.setCallCost(2);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(10);
        
    
       
        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

    })
})