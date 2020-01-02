import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scity } from '../models/scity.model';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScityService {
  [x: string]: any;

  private apiUrl = '/SCity/';  

  constructor(private http: HttpClient) { 
 
 }
// INSERT  
  create(scity: Object): Observable<Object> {
    return this.http.post(this.apiUrl, scity);
  }

// LIST
  get() {
    return this.http.get<Scity[]>(this.apiUrl+"/list");
  }

  public getByName(username:string){
  console.log(`${this.apiUrl}list/by/${username}`);
  return this.http.get<Scity[]>(`${this.apiUrl}/list/by/${username}`);
  }


// UPDATE  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  updateCity (id, product): Observable<any> {
    return this.http.put(this.apiUrl  + id, JSON.stringify(product), this.httpOptions).pipe(
      tap(_ => console.log(`updated city id=${id}`))
      
    );
  }
  
  extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getCity(id): Observable<any> {
    return this.http.get(this.apiUrl  + id).pipe(
      map(this.extractData));
  }

  //DELETE
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }  




}


