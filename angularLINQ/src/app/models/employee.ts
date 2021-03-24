export class Employee{
    EmpId: number;
    EmpName: string;
    EmpAge: number;
    isActive: boolean;

    constructor(c: number,d: string,f: number,e: boolean){
        this.EmpId = c;
        this.EmpName = d;
        this.isActive = e;
        this.EmpAge = f;
    }
}
