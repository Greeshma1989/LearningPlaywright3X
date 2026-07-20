let age=26;
let result= age>=18 ? 
(age>=25 ? "can drink" : "cannot drink"): "Not go goa";
console.log(result); // can drink

let statuscode=500;
let category= 
statuscode<200 ?"success" :
statuscode<400 ? "redirected" :
statuscode< 500 ? "client error" : "server error";
console.log(category); // server error

let temp=35;
let feel=(temp>=40) ? "Very Hot" : 
(temp>=30) ? "Hot" : 
(temp>=20) ? "Warm" : 
(temp>=10) ? "Cool" : "Cold";

console.log("7.Temp: ",temp,"°C, Feel: ",feel); // Temp: 35°C, Feel: Hot