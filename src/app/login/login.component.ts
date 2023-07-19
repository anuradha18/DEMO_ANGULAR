import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginServiceService} from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route: Router,
    private loginServiceService: LoginServiceService
    ){}
  ngOnInit() {
    
  }
  logIn(loginForm : any){
    if(this.loginServiceService.authenticate(loginForm)){
      this.route.navigateByUrl('/home');
    }else{
      alert('Invalid User Name');
    }
  }
}
