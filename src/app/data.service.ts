import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = 'http://127.0.0.1:8000/api/v1/companies/';
  constructor(private http:HttpClient) { }

  listUser(){
    return this.http.get<User>(this.API_URL);
  }
}
