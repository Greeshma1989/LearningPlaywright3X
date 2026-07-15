console.log(""==0); //true->"" is converted to 0 and then compared with 0
console.log(""===0); //false    ->"" is not converted to 0, so the comparison fails
console.log(""==false); //true ->"" is converted to false and then compared with false
console.log(""===false); //false    ->"" is not converted to false, so the comparison fails

console.log(0==false); //true ->0 is converted to false and then compared with false

console.log(0===false); //false 

console.log(null==undefined); //true
console.log(null===undefined); //false

console.log(null==0); //false   
console.log(null===0); //false
console.log(null>0); //false
console.log(null>=0); //true ->null is converted to 0 and then compared with 0
console.log(null== 0||null>0);//false ->null is converted to 0 and then compared with 0


console.log(undefined==0); //false
console.log(undefined===0); //false     
console.log(undefined==false); //false
console.log(undefined===false); //false 

console.log(0=="0"); //false -> 0 is converted to "0" and then compared with "0"

console.log("0"==0); //true  -> "0" is converted to 0 and then compared with 0  
console.log("0"===0); //false  -> "0" is not converted to 0, so the comparison fails           
console.log(0==="0"); //false

