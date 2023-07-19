import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routPrivGuard } from './rout-priv.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component:HomeComponent,
    canActivate:[routPrivGuard]
  },
  {
    path: 'employee',
    component:EmployeeComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
