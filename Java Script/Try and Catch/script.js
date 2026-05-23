let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter valid numbers");
}

let sum = parseInt(a) + parseInt(b);
try {
    console.log("The sum is" , sum*N);
} catch (error) {
    console.error("Error agaya bhai...");
}
finally{
    console.log("files are being closed and db connection is being closed")
}
