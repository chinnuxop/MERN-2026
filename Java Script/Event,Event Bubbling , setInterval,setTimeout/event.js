console.log("JavaScript connected");
//All mouse event key
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
let Btn = document.getElementById("btn");

Btn.addEventListener("click", ()=>{
    // alert("I was clicked. Yayy!!")
    document.querySelector(".box").innerHTML= 
    "<b>Yayy you were clicked</b> Enjoy Your click!";
})

Btn.addEventListener("contextmenu", ()=>{
     alert("Don't hack us by Right click Please");
   
})