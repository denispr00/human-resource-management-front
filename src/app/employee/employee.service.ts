import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import {HttpParams} from "@angular/common/http";
import { Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Employee } from './employee';
import { HttpClient, HttpHeaders} from  '@angular/common/http';


const API_URL = environment.apiUrl +'/employee';
const params = new HttpParams().set('id', "5");

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class EmployeeService {

  //constructor(private http: Http) {
  constructor(private  http:  HttpClient) {

  }

  // API: GET /employees
  public getAllEmployees(employee : Employee) : Observable<Employee[]>  {
    //return this.http.post<Employee>(API_URL + '/retrieveList',employee);
    let  emp = new Employee();
    console.log("service");
    return this.http
      .post<Employee[]>(API_URL + '/retrieveList',emp,httpOptions);
      // .pipe(map(data => {
      //   console.log("we got");
      //   return data;
      //   })
      // );
  }

  // API: POST /employees
  public createEmployee(employee: Employee) {
    // will use this.http.post()
  }

  // API: GET /employees/:id
  //public getEmployeeById(employeeId: number) {
  public getEmployeeById(): Observable<Employee> {
    // will use this.http.get()
    return this.http.get<Employee>(API_URL + '/retrieveById', {params});
  }

  // API: PUT /employees/:id
  public updateEmployee(employee: Employee) {
    // will use this.http.put()
  }

  // DELETE /employees/:id
  public deleteEmployeeById(employeeId: number) {
    // will use this.http.delete()
  }

}
