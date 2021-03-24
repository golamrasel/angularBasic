import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {EmployeeListComponent} from'./employee/employee-list/employee-list.component'

const routes: Routes = [
  {path:'list',component:EmployeeListComponent},
  {path:'', redirectTo:'/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
