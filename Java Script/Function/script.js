console.log("hey i am function")

function nice(name){
    console.log("Hey "+ name +" you are nice!")
    console.log("Hey "+ name +" you are good!")
    console.log("Hey "+ name +" your tshirt is nice!")
    console.log("Hey "+ name +" your course is good too!")
}
nice("Dibesh")


function sum(a,b,c=4){
    // console.log(a+b)
    return a+b+c;

}
result1=sum(3,5)
result2=sum(46,55)
result3=sum(35,56)
console.log("Sum of two number:",result1)
console.log("Sum of two number:",result2)
console.log("Sum of two number:",result3)



//arrow function
const func1=(x,y)=>{
    console.log("i am a arraow function",x+y)
}
func1(56,86)