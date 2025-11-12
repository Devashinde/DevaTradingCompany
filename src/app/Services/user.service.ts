import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

export interface User {
  u_id?: number;
  u_name: string;
  u_Mobile: string;
  u_Address: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = environment; // 🔗 Replace with your real API endpoint

  constructor(private http: HttpClient) {}

  // Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl.getapi);
  }

  // Add new user
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl.saveapi, user);
  }

  // Update user
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl.putapi}/${id}`, user);
  }

  // Delete user
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl.deleteapi}/${id}`);
  }
}
