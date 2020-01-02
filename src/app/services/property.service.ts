import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Property } from '../models/property.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiUrl = '/Property/'

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<Property[]>(this.apiUrl+"/list");
}

// INSERT  
public create(property: Object): Observable<Object> {
  return this.http.post(this.apiUrl, property);
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
public update (id, school): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(school), this.httpOptions).pipe(
    tap(_ => console.log(`updated school id=${id}`))
    
  );
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}
public getProperty(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}  

}
