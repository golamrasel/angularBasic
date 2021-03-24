import { Component, OnInit } from '@angular/core';
import { Employee } from './../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employee: Employee[] = [];
  active: boolean = false;
  newEmp: Employee[]=[];
  averAge: number = 0;
  desigConcat: string = "";
  isContains: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
    this.getDataList();
    this.getActiveStatus();
    //this.addNewEmp()
    this.getaverageAge();
    //this.getConcat();
    this.getContains();
    this.getDefultIfEmpty();
   }
  getDataList(){
    this.employee = [
      { EmpId: 11, EmpName: 'Dr Nice',EmpAge: 20,isActive: false },
      { EmpId: 12, EmpName: 'Narco',EmpAge:22 ,isActive: true }
     ] ;
  }
  getActiveStatus(){
    this.active = this.employee.some(u=>u.isActive)
  }
  addNewEmp(){
    this.newEmp = [{ EmpId: 13,EmpName: 'Md Rakib',EmpAge: 25,isActive: false }];
    this.employee.push(this.newEmp[0])
  } 
  getaverageAge(){
    this.averAge = Math.round(this.employee.reduce((a,u) => a + u.EmpAge,0)/this.employee.length);
  }
  getConcat(){
    var a = 'Abir ';
    var b = 'Hossain'
    this.desigConcat= a.concat(b.toString());
  }
  getContains(){
    var x = 'The quick brown fox jumps over the lazy dog';
    var z = 'fox';
    this.isContains = x.includes(z);
    if(this.isContains){
      var index = x.indexOf(z);
      if(index > 0){
        this.desigConcat = z + ' begins at character position ' + (index + 1);
      } 
    }
  }
  getDefultIfEmpty(){
    this.newEmp = this.employee.length ? this.employee : [];
  }
}
