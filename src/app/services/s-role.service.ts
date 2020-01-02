import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SRole } from '../models/s-role.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SRoleService {

  private apiUrl = '/SRole/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<SRole[]>(this.apiUrl+"/list");
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
public update (id, srole): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(srole), this.httpOptions).pipe(
    tap(_ => console.log(`updated srole id=${id}`))
    
  );
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}
public getSrole(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}  


}
