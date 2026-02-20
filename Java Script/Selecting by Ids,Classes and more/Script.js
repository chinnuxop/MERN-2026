console.log("Full stcak devloper")
//ByClass
let Dibesh =document.getElementsByClassName("box");
console.log(Dibesh)

Dibesh[3].style.backgroundColor = "red"
//ById
document.getElementById("D1").style.backgroundColor="Green"

//select !st class
document.querySelector(".box").style.backgroundColor="yellow"
//Select all classes
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="Blue"
});
