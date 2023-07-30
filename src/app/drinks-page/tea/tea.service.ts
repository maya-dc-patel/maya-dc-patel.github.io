import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Tea} from '../../models/tea';


@Injectable({
  providedIn: 'root'
})
export class TeaService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: 'authkey',
      userid: '1'
    })
  };
  constructor(private http: HttpClient) {}

  rootURL = '/api';
  allTeas!: Tea[];
  sendTeaData(tea: Tea) {
    return this.http.post<any>(
      'http://localhost:8080/Practice/api/v1/teas',
      tea,
      this.httpOptions
    );
  }

  getJournals() {
    return this.http.get<any>(
      'http://localhost:8080/Practice/api/v1/teas',
      this.httpOptions
    );
  }
}
