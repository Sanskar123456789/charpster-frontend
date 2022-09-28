import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { manager } from '../Models/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  api = "http://localhost:3000/api/manager"
  
  constructor(private http : HttpClient) { }

  login(data:{email: string, password: string}):Observable<any> {
    return this.http.post<any>(`${this.api}/login`,data);
  }

  newManager(data:manager):Observable<manager> {
    return this.http.post<manager>(`${this.api}/newManager`,data);
  }

  getAdmin():Observable<manager[]> {
    return this.http.get<manager[]>(`${this.api}/getAdmins`);
  }

}
