const a = [1,5,2,7,3];
const b = [8,12,64];
const c = [90,67,34,77];

let arr = a.concat(b).concat([15]).concat(c);
console.log(arr);

arr = [a,b,5,c]
console.log(arr);

arr = [...a, ...b, 5, ...c]
console.log(arr);

arr = [23, 56, 12, 89, 34];
console.log(Math.max(arr));
console.log(Math.max(...arr));