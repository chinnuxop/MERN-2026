console.log("sum of two number  :");
let a = 11;
var b = 45;
var c = "Dibesh";
var d = 'D';
var _a="dibesh";
console.log(a+b);
console.log("Type of a,b,c and d  :")
console.log(typeof a,typeof b,typeof c,typeof d);

// Var vs Let in JavaScript

// 1.var is globally scoped while let and const are block scoped.
// 2.Var can be updated and reupload within its scoped.
// 3.let can be updated but not redeclared.
// 4.Const can neither be updated nor be re-declared.

{
    let a=66;
    console.log(a);
}
console.log(a)

//DataType :
let x= "Dibesh Parida";
let y = 22;
let z= 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r );
console.log(typeof x,typeof y,typeof z,
    typeof p,typeof q,typeof r);


    //Object :
    //An object is javascript can be created as follow.

    // Const item ={
    //     name : "Led buld","Dsibesh"
    //     price : "150"
    // }

  let o = {
    "name" : "Harry",
    "job role" : "MERN",
     "job code" : 45678
  }  
  console.log(o);
  o.Salary = " 100cr"
  console.log(o)
  o.Salary = " 500cr"
  console.log(o)



