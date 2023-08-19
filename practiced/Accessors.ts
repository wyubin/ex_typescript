let passcode = "secret passcode";

class Employe {
    private _fullName: string;
    //取值方法 Getter Method
    get fullName(): string {
        return this._fullName;
    }
    //存值方法Setter Method
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("錯誤: 沒有授權");
        }
    }
}

//實例化類別 Employee
let employe = new Employe();

employee.fullName = "Una Lin";
if (employe.fullName) {
    alert(employe.fullName); //Una Lin
}

