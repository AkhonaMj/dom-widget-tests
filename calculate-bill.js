

function calculateBtnClicked(billString) {

 var billItems = billString.split(",");
  var billTotal = 0;

  function callOrSms(){
    for (var i = 0; i < billItems.length; i++) {
         var billItem = billItems[i].trim().toLowerCase();
      if (billItem === "call") {
            billTotal += 2.75;
           } else if (billItem === "sms") {
            billTotal += 0.75;
           }
      

  }

  function warningOrCriticalLevel(){

  }

return{
  callOrSms,
  warningOrCriticalLevel
}
  }
  
    

//   }

//   // if (billTotal > 30) {
//   //   billTotalElement.classList.add("danger");
//   // } else if (billTotal > 20) {
//   //   billTotalElement.classList.add("warning");
//   // }
 }

