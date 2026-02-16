let obj1 = ["Crazy", "Amazing", "Fire"];
let obj2 = ["Engines", "Foods", "Garment"];
let obj3 = ["Bros", "Limited", "Hub"];

let rand1 = Math.floor(Math.random() * obj1.length);
let rand2 = Math.floor(Math.random() * obj2.length);
let rand3 = Math.floor(Math.random() * obj3.length);

console.log(obj1[rand1] + " " + obj2[rand2] + " " + obj3[rand3]);
