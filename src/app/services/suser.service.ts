import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SUser } from '../models/suser.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuserService {

  apiUrl='/SUser/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<SUser[]>(this.apiUrl+"/list");
}

public getByType(username:string){
  console.log(`${this.apiUrl}list/by/${username}`);
  return this.http.get<SUser[]>(`${this.apiUrl}/list/by/${username}`);
}

/*public getByUsername(username:string){
  console.log(`${this.apiUrl}list/by/${username}`);
  return this.http.get<SUser[]>(`${this.apiUrl}/list/by/${username}`);
}*/

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
public updateSuser (id, user): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(user), this.httpOptions).pipe(
    tap(_ => console.log(`updated user id=${id}`))   
  );
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}
public getSuser(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}  



}
