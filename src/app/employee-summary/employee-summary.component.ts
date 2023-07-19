import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../store/employees.store';
import { select, Store } from '@ngrx/store';
import { empKey } from '../reducer/emp.reducer';
import { selectAllEmp, selectEmpCount, selectempIds, selectDepartment } from '../selectors/emp.selector';
import { employeeActions } from '../actions/emp.actions';
import { filter } from 'rxjs';
@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css']
})
export class EmployeeSummaryComponent {
  public empCount: Observable<number>;
  public empDeptCount: Observable<string[] | number[]>
  public empList: Observable<employee[]>;
  public empListgrpBy:Observable<string[] | number[]>;
  constructor(private readonly store: Store<{[empKey]: employee[]}>) {
    this.empCount = this.store.pipe(select(selectEmpCount));
    this.empList = this.store.pipe(select(selectAllEmp));
    this.empListgrpBy =this.store.pipe(select(selectempIds),filter(empId => empId !== undefined));
    this.empDeptCount = this.store.pipe(select(selectDepartment)), filter(department =>department !== undefined);   
  }
  
  ngOnInit(){
    this.store.dispatch(employeeActions.loadEmployee());
    console.log(this.empList);

  }
}
