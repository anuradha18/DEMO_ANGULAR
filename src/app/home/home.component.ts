import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { employee } from '../store/employees.store';
import { TranslateService } from '@ngx-translate/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empDetails: any;
  constructor(
    private route: Router,
    private loginService: LoginServiceService,
    private empService: EmployeeService,
    public translate: TranslateService
  ){
    
  }
  
  ngOnInit(){
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    let loggedInUser  = this.loginService.getLoggedInUser();
    this.empDetails = this.empService.getEmployeeDetails(loggedInUser);
  }
  openEmp(){
    this.route.navigateByUrl('/employee');
  }
  public changeLanguage(language: string) {
    this.translate.use(language);
  }
}
