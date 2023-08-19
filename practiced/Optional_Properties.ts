//選擇性屬性 變數加上?
interface number_test{
    x:number;
    y?:number;
}
//類別
let employee= {
    empId : 1 ,
    empName : "shaohua" ,
    showInfo : function(){} 
}

employee.showInfo = ()=>{
    console.log(employee.empId+"-"+employee.empName);
}

class Employee {

    public a: number;
    protected b: number;
    private c: number;

    constructor(first: number, second: number, third: number) {
        this.a = first;
        this.b = second;
        this.c = third;
}

    showInfo() {
        console.log(this. a + "-" + this.b + "-" + this.c) ;
    };
}