let actualstatuscode=200;
let expectedstatuscode=200;
let result= actualstatuscode===expectedstatuscode ? "Test Passed" : "Test Failed";
console.log(result); // Test Passed


let environment="staging";
let baseURL= environment==="production"
 ? "https://production.example.com"
 : "https://staging.example.com" ;
 console.log(baseURL); // https://staging.example.com


 let responseTime= 350;
 let sla=1000;
 let slastatus =responseTime <= sla ? 
 "SLA Passed" : "SLA Failed";
 console.log(`response: ${responseTime}ms -${slastatus}`); // SLA Passed
 //template literal '${variable}' is used to print the variable value in the string