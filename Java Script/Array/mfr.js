let arr = [1,13,5,7,7,11]
//1st method
let newarr =[]
for(let i=0;i<arr.length;i++){
    const value = arr[i]
    newarr.push(value**2)
}
console.log(newarr)


//map() => Create anew array by performing some operation on each array element
const a =[1,2,3]
// let b = []
let b = a.map((value,index,array)=>{
    return value*value
    })
console.log(b)

//2nd Method using map
let newarr1 = arr.map(e=>{
    return e**2
})
console.log(newarr1)


/*filter() is used to select elements from an array based on a condition.

It creates a new array containing only the elements that pass the test.
*/
 newarr2 = [1,3,55,4,58,35]
const greaterthanseven = (e)=>{
   if(e>7){
    return true
   } 
   return false
}
console.log(newarr2.filter(greaterthanseven))

///////////////////////


let arr3 =[1,2,3,4,5,6]

const red = (a,b) =>{
    return a*b
}
console.log(arr3.reduce(red))

//from()=> Convert String in to array
let A = Array.from("DIBESH")
console.log(A)