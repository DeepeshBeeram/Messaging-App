import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/User';


// const httpOptions = {

//   headers: new HttpHeaders({
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'user');
}

getUserId(id): Observable<User> {

  return this.http.get<User>(this.baseUrl + 'user/' + id);
}

updateUser(id: number, user: User) {
  return this.http.put(this.baseUrl + 'user/' + id, user);

}

}

