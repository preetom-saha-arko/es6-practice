const add = function (a,b){
    return a+b;
}

console.log(add(2,3));

let res = (a,b) => a+b;
console.log(res(5,3));

res = () => 5;
console.log(res());

res = num => num*2;
console.log(res(5));

res = (a,b) => {
    const p = a+b;
    const q = a-b;
    return p/q;
}

console.log(res(5,2));
