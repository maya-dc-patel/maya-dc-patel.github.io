import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from '../models/ingredient';
import { Journal } from '../models/journal';
import { Entry } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: 'authkey',
      userid: '1'
    })
  };
  constructor(private http: HttpClient) {}

  rootURL = '/api';
  allJournals!: Journal[];
  sendJournalData(journal: Journal) {
    return this.http.post<any>(
      'http://localhost:8080/Practice/api/v1/journals',
      journal,
      this.httpOptions
    );
  }


  updateJournal(journal: Journal) {
    console.log('here');
    return this.http.put<any>(
      'http://localhost:8080/Practice/api/v1/journal/' + journal.name,
      journal,
      this.httpOptions
    );
  }
  getJournals() {
    return this.http.get<any>(
      'http://localhost:8080/Practice/api/v1/journals',
      this.httpOptions
    );
  }

  addEntry(entry: Entry) {
    return null;
  }
}
