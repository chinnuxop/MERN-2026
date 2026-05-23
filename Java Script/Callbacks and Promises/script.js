// Callbacks and Promises in JavaScript:
//Asynchronous and synchronous
console.log("Callback and Promises: ")
console.log("i am the Lion")

setTimeout(() => {
    console.log("I am inside the setTimeout")
}, 5000);

console.log("The End");

//callback function
const fn = () => {
    console.log("Nothing");
}
const callback = (arg,fn) =>{
    console.log(arg);
    fn();
}
const loadScript = (src, callback) => {
let sc = document.createElement("script");
sc.src= src;
sc.onload = () => callback("Dibesh",fn);
document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);