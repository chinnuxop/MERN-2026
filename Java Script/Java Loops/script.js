console.log("I am a Loop")
//For loop
let a=1;
for(let i=0;i<100;i++){
    console.log(a+i)
}
//Forin
let obj={
    name :"Dibesh",
    role : "Programmer",
    company : "Deloitte"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
    
}
//Only for key like name,role,company
for (const key in obj) {
    console.log(key)
    
}

//For-of

for (const c of "Dibesh") {
    console.log(c)
    
}

