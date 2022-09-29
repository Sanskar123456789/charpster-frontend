import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Client } from '../Models/Client';
import {Observable} from 'rxjs';
import { article } from '../Models/article';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // api = "http://localhost:3000/api/client"

  api = "https://charpster.herokuapp.com/api/client";

  constructor(private http : HttpClient) { }

  allClient():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.api}/allClients`);
  }

  oneClient(id:string):Observable<Client>{
    return this.http.get<Client>(`${this.api}/client/${id}`)
  }

  newClient(data:Client):Observable<Client>{
    return this.http.post<Client>(`${this.api}/newClient`,data);
  }

  updateClient(id:string, data:Client):Observable<Client>{
    return this.http.put<Client>(`${this.api}/updateClient/${id}`,data);
  }

  deleteClient(id:string):Observable<any>{
    return this.http.delete<any>(`${this.api}/deleteClient/${id}`)
  }

  addArticle(Clientid:string, data:article):Observable<Client>{
    return this.http.put<Client>(`${this.api}/addarticles/${Clientid}`,data);
  }

  changeArticleStatus(id:string,data:article):Observable<Client>{
    return this.http.put<Client>(`${this.api}/changeArticleStatus/${id}`,data);
  }

  allArticle():Observable<article[]> {
    return this.http.get<article[]>(`${this.api}/allArticles`);
  }

  deleteArticle(id:string):Observable<any> {
    return this.http.delete(`${this.api}/deleteArticle/${id}`);
  }
  login(name:string):Observable<Client> {
    return this.http.get<Client>(`${this.api}/login/${name}`);
  }
}
