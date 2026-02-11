console.log("sum of two number  :");
let a = 11;
var b = 45;
var c = "Dibesh";
var d = 'D';
var _a = "dibesh";
console.log(a + b);
console.log("Type of a,b,c and d  :")
console.log(typeof a, typeof b, typeof c, typeof d);

// Var vs Let in JavaScript

// 1.var is globally scoped while let and const are block scoped.
// 2.Var can be updated and reupload within its scoped.
// 3.let can be updated but not redeclared.
// 4.Const can neither be updated nor be re-declared.

{
  let a = 66;
  console.log(a);
}
console.log(a)

//DataType :
let x = "Dibesh Parida";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z,
  typeof p, typeof q, typeof r);


//Object :
//An object is javascript can be created as follow.

// Const item ={
//     name : "Led buld","Dsibesh"
//     price : "150"
// }

let o = {
  "name": "Harry",
  "job role": "MERN",
  "job code": 45678
}
console.log(o);
o.Salary = " 100cr"
console.log(o)
o.Salary = " 500cr"
console.log(o)


//Q1.Create a variable of type string and try to add a number to it
// Example-1

let Name = "Dibesh"
let Add1 = Name + " Parida"
console.log(Add1)

//Example-2

let num1 = "500"
let num2 = 400

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(Number(num1) + num2)

//Q2.Use typeof operator to find the datatype of the string in last question.
let A = "abcde"
console.log(typeof A)

//Q3.Create a const object in javascript can you chnage it to hold a number later.
//Q4.Try to add a new key to the const object in Problem 3 were you able to do it.
const B = {
  "Num1": 5000
}

B.Num1 = 8000
console.log(B)
B.Num2 = 10000
console.log(B)

//Q5.Write a JS programm to create a word-incoming dictionary of 5 word
const dictionary ={
 Apple: "A fruit that is red or green in color",
  Book: "A collection of written or printed pages",
  Computer: "An electronic device used to process data",
  River: "A large natural stream of water",
  Teacher: "A person who teaches students",
  
};
console.log(dictionary)
console.log(dictionary.Teacher)





