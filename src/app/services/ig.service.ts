import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class IgService {
  constructor(private http: HttpClient) {}
  baseURL = 'https://o68kz3gdtl.execute-api.us-east-1.amazonaws.com/dev';
  getToken() {
    return JSON.parse(localStorage.getItem('user') || '')?.[
      'signInUserSession'
    ]?.['idToken']?.['jwtToken'];
  }

  getFeeds(): Observable<any> {
    return this.http.get(`${this.baseURL}/feeds`, {
      headers: new HttpHeaders({
        Authorization: this.getToken(),
      }),
    });
  }

  postImage(post: Object): Observable<any> {
    return this.http.post(`${this.baseURL}/new-post`, post, {
      headers: new HttpHeaders({
        Authorization: this.getToken(),
      }),
    });
  }
}
