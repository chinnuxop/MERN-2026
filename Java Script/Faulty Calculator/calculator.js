console.log("Faulty calculator")
//create a faulty cal calculator usiong javscript
/*This faulty calculator does following:
1.it takes two number as input from UserActivation
2.it performs wrong operator as follow:

+ --------> -
* --------> +
- --------> /
/ --------> **

it perform wrong operation 10% of the times

*/

let random = Math.random()
let a = prompt("Enter first number :")  
let b = prompt("Enter second number :")
let c = prompt("Enter operation :")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}



if(random>0.1){
    //perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}