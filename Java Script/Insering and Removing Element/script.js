let arr = [10, 20, 30];
arr.push(40);
console.log(arr);  // [10, 20, 30, 40]

let arr1 = [10, 20, 30];
arr.unshift(5);
console.log(arr1);  // [5, 10, 20, 30]

let arr3 = [10, 20, 30];
arr.splice(1, 0, 15);  // index 1, remove 0 items, insert 15
console.log(arr3);  // [10, 15, 20, 30]