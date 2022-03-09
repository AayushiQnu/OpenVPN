import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getMenus() {
    return this.http.get('assets/data/menu.json');
  }

  public getCurrentUsers(){
    const localUrl = this.baseUrl + '/currentUsers';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(localUrl, {headers});
  }
}
