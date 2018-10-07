import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  records = {}

  rows : Employee[];

  private emp : Employee;
  
  constructor(private employeeService:EmployeeService) { 
    
  }

  ngOnInit() {
    this.emp = new Employee;
    //this.records = this.employeeService.getAllEmployees(this.emp);
    this.employeeService.getAllEmployees(this.emp)
    .subscribe(data => {
      this.rows = data;
    });
    // this.employeeService.getAllEmployees(this.emp).pipe(
    //     map( response => {
    //         console.log(response);
    //     })

    // );
/*
    return this.outdateAutoRefeService.fetchOutdateAutoReferencesList(this.outdateAutoRefeFilter).pipe(
      map((response: PagedData<OutdateAutoReferences>) => {
        if (response) {
          if (!this.selectedOutdateAutoRefe || this.selectedOutdateAutoRefe.length === 0) {
            this.selectedOutdateAutoRefe = [response.data[0]];
          }
        } else {
          // this.outdateLogs = [];
          this.selectedOutdateAutoRefe = [];
        }
        return response;
      })
    );
    */
    
  }

}
