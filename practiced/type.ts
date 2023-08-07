//陣列
let arrBoolean : boolean[] = [true,false] ;

let age : number[] = [14,45] ;

let dadandson : string[] = ["shaohua","yubin"] ;

let tuple : [ boolean , number , string ] = [ true , 14 , "shaohua" ] ;

//Enum type
enum Name{ shaohua , yubin }
console.log(Name.shaohua)
console.log(Name.yubin)

//Null type

//Undefined type

//any type (無指定)
let notconfirmed:any = "shaohua"

//Void type (不須回傳)
function Hi() : void {
    console.log("Hello") ;
}

Hi() ;

//interface
interface MyFunc{
    x:number;
    y:number;
}

let func1=(p:MyFunc)=>{
    console.log(p.x,p.y);
}

func1({x:10,y:20});

//

interface MathFunc {
    (x: string, y: string): string;
}

//Indexable Type

interface indexArr {
    [index: number]: string;
}

let arr: indexArr = ['Yubin', 'Shaohua', 'Fanglin'];
let dad: string = arr[0];
let son: string = arr[1];
let mom: string = arr[2];

console.log(dad); 
console.log(son); 
console.log(mom); 

//class

class family{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}
console.log(family.prototype.name)