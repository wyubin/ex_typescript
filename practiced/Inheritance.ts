// 繼承 Inheritance
class Employee {
    constructor(private empId: number, private empName: string) { }
    showInfo() {
        return this.empId + "-" + this.empName;
    };
}

class Sales extends Employee {
    constructor(empId: number, empName: string, public bonus?: number) {
        super(empId, empName);
        this.bonus = 1000;
    }
}

let emp1 = new Employee(1, "shaohua");
console.log(emp1.showInfo());

let s1 = new Sales(2, "yubin");
console.log(s1.showInfo());
console.log(s1.bonus);