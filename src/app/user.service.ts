import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // GET ALL USERS
  getAllUsers() {
    return this.http.get(`${environment.apiURL}?per_page=20`);
  }

  // GET SINGLE USER
  getSingleUser(username: string) {
    return this.http.get(`${environment.apiURL}/${username}`);
  }
}
