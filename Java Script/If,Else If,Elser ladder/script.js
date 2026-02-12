console.log("Hello I am Conditional Statement")

let age =4;
let grace=2;
/*
I am multiline comment

*/
//Example-1
if((age**grace)>=18){
    console.log("You can Vote")
}
else{
    console.log("you can not drive")
}

//Example-2
let age2 =18;

if(age2==18){
    console.log("You can Vote")
}
else{
    console.log("you can not drive")
}

//Example-3
let age3 =0;

if(age3>18){
    console.log("You can Vote")
}
else if(age3==0){
    console.log("Are you kidding?")
}
else {
    console.log("you can not drive")
}

//Ternary operator
 let a=9;
 let b=8;
 c= (a>b)?(a+b):(b-a)
 console.log(c)


 //Practice set
 //Q1.Use logical opertor to find whether the age of a person lies between 10 and 20?

 let mark=11;

 if((mark>=10) && (mark<=20)){
    console.log("passed");
 }
 else{
    console.log("not passed");
 }
 
 //Q2.Demonstrate the use of switch case statements in javascript
/*
switch(expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}

*/
//Example-1

let Day=6;

switch(Day){
    case 1:
        console.log("Sunday");
        break;
        case 2:
        console.log("Monday");
        break;
        case 3:
        console.log("Tuesday");
        break;
        case 4:
        console.log("Wednesday");
        break;
        case 5:
        console.log("Thusday");
        break;
        case 6:
        console.log("Friday");
        break;
        case 7:
        console.log("Saturday");
        break;
        default:
            console.log("Invalid Day")
        
}

//Example-2
let num1=8;
let num2=6;
let operator="-";
switch(operator){
    case "+":
        console.log(num1+num2)
        break;
        case "-":
        console.log(num1-num2)
        break;
        case "*":
        console.log(num1*num2)
        break;
        case "/":
        console.log(num1/num2)
        break;
         case "**":
        console.log(num1**num2)
        break;
        default:
            console.log("invalid")
}

 //Q3.Write a javascript program to find whether a number is divisible by 2 and 3

 let num3=7;

 if((num3%2==0) && (num3%3==0)){
    console.log("number is divisible by 2 and 3")
}
else{
    console.log("number is not divisible by 2 and 3")
}

 //Q4.Write a javascript program to find whether a number is divisible by either 2 or 3

 let num4=8;

 if((num4%2==0) || (num4%3==0)){
    console.log("number is divisible by either 2 or 3")
}
else{
    console.log("number is not divisible by 2 and 3")
}


