import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./authorization/log-in/log-in.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LogOutComponent} from "./authorization/log-out/log-out.component";
import {CreateComponent} from "./employee/create/create.component";

export const routes: Routes = [
  { path: 'login', component: LogInComponent},
  { path: 'logout', component: LogOutComponent},
  { path: 'employee/create', component: CreateComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
