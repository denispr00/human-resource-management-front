import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveComponent } from './leave/leave.component';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from  '@swimlane/ngx-datatable';

const appRoutes : Routes = [
  { path : 'home', component: HomeComponent},
  { path : 'employee', component: EmployeeComponent},
  { path : 'leave', component: LeaveComponent},
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path : '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LeaveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
