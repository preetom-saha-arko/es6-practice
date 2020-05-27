function add(num1, num2)
{
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}

function add1(num1, num2)
{
    num2 = num2 || 0;
    return num1 + num2;
}

function add_def(num1, num2=0)
{
    return num1 + num2;
}

let a = add(14);
console.log(a);

a = add1(14);
console.log(a);

a = add_def(14);
console.log(a);