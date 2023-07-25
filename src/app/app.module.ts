import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LogInComponent } from './authorization/log-in/log-in.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { routes } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogOutComponent } from './authorization/log-out/log-out.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    LogOutComponent,
    EmployeeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
