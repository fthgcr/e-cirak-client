import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from '../models/school.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Sdistrict } from '../models/sdistrict.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private apiUrl = '/School/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<School[]>(this.apiUrl+"/list");
}

public getByCityId(id: number) : Observable<any> {
  return this.http.get(this.apiUrl  +"/city/"+ id).pipe(
    map(this.extractData));
}

// INSERT  
public create(school: Object): Observable<Object> {
  return this.http.post(this.apiUrl, school);
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
public updateSchool (id, school): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(school), this.httpOptions).pipe(
    tap(_ => console.log(`updated school id=${id}`))
    
  );
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}
public getSchool(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}



}
