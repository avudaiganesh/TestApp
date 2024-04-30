import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:3000';
  //private baseUrl=appInhouse;
  constructor(private http: HttpClient) { }

 getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`)
  }

 //getUserByEmail(){
  //alert('') ;
   
  //return this.http.get('../assets/db/db.json');
  
//}
}
