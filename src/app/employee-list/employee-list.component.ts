import { Component } from '@angular/core';
import { employee } from '../store/employees.store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { empKey } from '../reducer/emp.reducer';
import { EmpApiService } from '../services/empapi.services';
import { employeeActions } from '../actions/emp.actions';
import { selectAllEmp, selectEmpCount } from '../selectors/emp.selector';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  public empList: Observable<employee[]>;
  public empCount: Observable<number>;
  public showEditForm = false;
  public showEmployeeList = false;
  public showSave = false;
  public empForm = {};
  public selectedEmp = {} as employee;
  constructor(private readonly store: Store<{[empKey]: employee[]}>) {
    this.empList = this.store.pipe(select(selectAllEmp));
    this.empCount = this.store.pipe(select(selectEmpCount));
    
  }
  displayedColumns: string[] = ['userName', 'empId', 'firstName', 'lastName', 'dOB','dOJ','department','delete'];

  public load() {
    this.store.dispatch(employeeActions.loadEmployee());
    this.showEmployeeList = true;
    this.empCount = this.store.pipe(select(selectEmpCount));
  }

  getRecord(selectedEmp:employee){
    this.showEditForm = true;
    this.selectedEmp = {} as employee;
    this.selectedEmp.empId = selectedEmp.empId;
    this.selectedEmp.userName = selectedEmp.userName;
    this.selectedEmp.firstName = selectedEmp.firstName;
    this.selectedEmp.lastName = selectedEmp.lastName;
    this.selectedEmp.dOJ = selectedEmp.dOJ;
    this.selectedEmp.dOB = selectedEmp.dOB;
    this.selectedEmp.department = selectedEmp.department;
  }
  delete(element :employee){
    this.store.dispatch(employeeActions.deleteEmployee({data: element.empId}));
  }
  add(){
    this.showEditForm = true;
    this.selectedEmp = {} as employee;
    this.showSave = true;
  }
  save(){  
    this.store.dispatch(employeeActions.addEmployee({data: this.selectedEmp}));
    this.showSave = false;
    this.showEditForm = false;
  }
  edit(){
    this.store.dispatch(employeeActions.editEmployee({data: {
      id: this.selectedEmp.empId,
      changes: {
        empId: this.selectedEmp.empId,
        userName: this.selectedEmp.userName,
        firstName: this.selectedEmp.firstName,
        lastName:this.selectedEmp.lastName,
        dOJ:this.selectedEmp.dOJ,
        dOB:this.selectedEmp.dOB,
        department:this.selectedEmp.department
      }
    }}));
    this.showEditForm = false;
  }
  cancel(){
    this.showEditForm = false;
    this.selectedEmp = {} as employee;
  }
}
