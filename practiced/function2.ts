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

//加減乘除function
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
//可取其中一數
function add2(x: number, y: number = 0): number {
    return x + y; // return x + 0
}
let e = 10;
let f = 20;
let r1 = add2(e, f); // 10+20=30
let r2 = add2(e); // 10
console.log(r1, r2);

//總和
function sum(...nums: number[]): string {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return `Total = ${total}`;
}

console.log(sum(1, 2, 3, 4, 5)); //回傳Total = 15
console.log(sum(1, 2, 3, 4, 5, 6)); //回傳Total = 21

//overloads 

function add3(x: number, y: number): number;
function add3(x: string, y: string): string;
function add3(x: any, y: any): any {
    return x + y;
}

console.log(add3(10,20));//number
console.log(add3("10","20"));//string

