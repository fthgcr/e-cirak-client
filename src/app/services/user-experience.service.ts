import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserExperience } from '../models/user-experience.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserExperienceService {

  apiUrl='/UserExperience/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<UserExperience[]>(this.apiUrl+"/list");
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

public update(id, userExp): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(userExp), this.httpOptions).pipe(
    tap(_ => console.log(`updated user id=${id}`))   
  );
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

public getUserExperience(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}  


}
