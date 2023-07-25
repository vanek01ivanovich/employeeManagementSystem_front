import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthLoginInfo} from "./login-info";
import {JwtResponse} from "./jwt-response";
import {CreateEmployeeRequestDto} from "../authorization/data/CreateEmployeeRequestDto";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private loginUrl = `http://localhost:8080/login`;
  private createUserUrl = `http://localhost:8080/employee`;


  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  createUser(requestDto: CreateEmployeeRequestDto): Observable<Boolean> {
    return this.http.post<Boolean>(this.createUserUrl, requestDto, httpOptions);
  }

}
