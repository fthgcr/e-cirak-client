import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpecialCase } from '../models/special-case.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpecialCaseService {

  apiUrl='/SpecialCase/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<SpecialCase[]>(this.apiUrl+"/list");
}

// INSERT  
public create(user: Object): Observable<Object> {
  return this.http.post(this.apiUrl, user);
}

//DELETE
public delete(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
}

// UPDATE  
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

public update(id, specialCase): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(specialCase), this.httpOptions).pipe(
    tap(_ => console.log(`updated user id=${id}`))   
  );
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

public getSpecialCase(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}

}
