import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  // GET ALL USERS
  getAllUsers() {
    return this.http.get(`${this.apiURL}?per_page=20`)
  }

  // GET SINGLE USER
  getSingleUser ( username: string ) {
    return this.http.get(`${this.apiURL}/${username}`)
  }
}
