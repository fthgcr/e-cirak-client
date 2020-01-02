import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SUserRole } from '../models/s-user-role.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SUserRoleService {

  private apiUrl = '/SUserRole/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<SUserRole[]>(this.apiUrl+"/list");
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

public update (id, suserrole): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(suserrole), this.httpOptions).pipe(
    tap(_ => console.log(`updated suserrole id=${id}`))   
  );
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

public getSUserRole(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
} 


}
