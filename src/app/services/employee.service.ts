import { Injectable } from '@angular/core';
import { employee } from '../store/employees.store';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: employee[] = [
      {
        userName:'Anu',
        empId: 101,
        firstName: 'Anuradha',
        lastName: 'Gujuri',
        dOJ: new Date('07/04/1984'),
        dOB: new Date('12/04/2018'),
        department: 'IT'
      },{
        userName:'Swetha',
        empId: 102,
        firstName: 'Swetha',
        lastName: 'K',
        dOJ: new Date('06/04/1986'),
        dOB: new Date('12/04/2016'),
        department: 'IT'
      },{
        userName:'Ramya',
        empId: 103,
        firstName: 'Ramya',
        lastName: 'K',
        dOJ: new Date('09/04/1990'),
        dOB: new Date('12/04/2020'),
        department: 'IT'
      },{
        userName:'Sudha',
        empId: 102,
        firstName: 'Raga Sudha',
        lastName: 'L',
        dOJ: new Date('08/04/1989'),
        dOB: new Date('12/04/2021'),
        department: 'IT'
      }
    ]
  constructor() { }
  getEmployeeDetails(userName : string): any {
    for(let index=0; index < this.employeeList.length; index++){
      if(userName ==  this.employeeList[index].userName){
        return this.employeeList[index];
      }
    }
  }
}
