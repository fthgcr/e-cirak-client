import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SrolePermission } from '../models/srole-permission.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SrolePermissionService {

  apiUrl='/SRolePermission/';

  constructor(private http: HttpClient) { }


// LIST
public get() {
  return this.http.get<SrolePermission[]>(this.apiUrl+"/list");
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

public update(id, rolePrm): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(rolePrm), this.httpOptions).pipe(
    tap(_ => console.log(`updated rolePrm id=${id}`))   
  );
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

public getSRolePrm(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}  


}
