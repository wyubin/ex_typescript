let sayHi=function (){
    console.log('Hi') ;
}

sayHi() ;
let sayHello : Function = function(){
    console.log('Hello');
}
sayHello() ;

let sayNice : Function = () => {
    console.log('Nice');
}

sayNice();


function add(x: number, y: number): number {
    return x + y;
}

function sub(x: number, y: number): number {
    return x - y;
}

function mul(x: number, y: number): number {
    return x * y;
}

function div(x: number, y: number): number {
    return x / y;
}

let i: number = 10;
let j: number = 20;
let m: number  = add(i, j);
console.log(m); 
let sub1: number  = sub(i, j);
console.log(sub1); 
let mul1: number  = mul(i, j);
console.log(mul1);
let div1: number  = div(i, j);
console.log(div1);