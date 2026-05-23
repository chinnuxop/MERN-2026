console.log("JavaScript connected");
//All mouse event key
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
let Btn = document.getElementById("btn");
let Btn1 = document.getElementById("btn1");
let box = document.querySelector(".box");

let originalContent = box.innerHTML;

Btn.addEventListener("click", ()=>{
    // alert("I was clicked. Yayy!!")
    document.querySelector(".box").innerHTML= 
    "<b>Yayy you were clicked</b> Enjoy Your click!";
})
Btn1.addEventListener("dblclick", ()=>{
     box.innerHTML = originalContent;

})

// Btn.addEventListener("contextmenu", ()=>{
//      alert("Don't hack us by Right click Please");
   
// })


// {Form Event} : 
 let form = document.getElementById("myForm");
 let nameInput = document.getElementById("name");
 let output = document.querySelector(".output");

 nameInput.addEventListener("input", ()=>{
    output.innerHTML = "Typing: " + nameInput.value;
 });

 form.addEventListener("submit", (e) => {

      // Prevent page refresh
      e.preventDefault();

      output.innerHTML =
      "<b>Form Submitted Successfully!</b><br>" +
      "Name: " + nameInput.value;

    });