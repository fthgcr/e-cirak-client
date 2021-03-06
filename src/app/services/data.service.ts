import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl='/SUser/list';
  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl);
  }
}
