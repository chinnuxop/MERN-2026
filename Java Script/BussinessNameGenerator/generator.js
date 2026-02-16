/*
Create a bussiness name generator by combininglist of adjective and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engines
Foods
Garment

Another Word:
Bros
Limited
Hub

*/

let rand = Math.random()
let first,second,third
//0 0.33 0.66 1
//let's generate the first word
if(rand<0.33){
 first="Crazy"
}
else if(rand<0.66 && rand>=0){
    first="Amazing"
}
else{
    first = "Fire"
}

//let's generate the second word
rand = Math.random()
if(rand<0.33){
 second="Engines"
}
else if(rand<0.66 && rand>=0){
    second="Foods"
}
else{
    second = "Garment"
}


//let's generate the third word
rand = Math.random()
if(rand<0.33){
 third ="Bros"
}
else if(rand<0.66 && rand>=0){
    third ="Limited"
}
else{
    third  = "Hub"
}

console.log(`${first} ${second} ${third}`)
