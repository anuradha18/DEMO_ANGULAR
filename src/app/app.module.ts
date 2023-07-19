import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { routPrivGuard } from './rout-priv.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


import {LoginServiceService} from './services/login-service.service';
import { EmployeeService } from './services/employee.service';
import { EmpApiService } from './services/empapi.services';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeSummaryComponent } from './employee-summary/employee-summary.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { empKey, empReducer } from './reducer/emp.reducer';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { empEffects } from './effects/emp.effects';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    EffectsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  /*   TranslateService, */
    StoreModule.forRoot({
      [empKey]: empReducer
    }, {}),
    EffectsModule.forRoot([empEffects])
  ],
    
  
  providers: [
    LoginServiceService,
    EmployeeService,
    EmpApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){}
  ngOnInit(){
    
  }
}
