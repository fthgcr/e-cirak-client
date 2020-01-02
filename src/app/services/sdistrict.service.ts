import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Sdistrict } from '../models/sdistrict.model';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SdistrictService {

  private apiUrl = '/SDistrict/';  

  constructor(private http: HttpClient) { }

// INSERT  
public create(sdistrict: Object): Observable<Object> {
  return this.http.post(this.apiUrl, sdistrict);
}

// LIST
public get() {
  return this.http.get<Sdistrict[]>(this.apiUrl+"/list");
}

public getDistcrit(id: number) {
  return this.http.get<[Sdistrict]>(this.apiUrl+"/list/"+`${id}`);
}

public getByName(username:string){
  console.log(`${this.apiUrl}list/by/${username}`);
  return this.http.get<Sdistrict[]>(`${this.apiUrl}/list/by/${username}`);
}

// UPDATE  
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
public updateDistrict (id, product): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(product), this.httpOptions).pipe(
    tap(_ => console.log(`updated district id=${id}`))
    
  );
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}
public getDistrict(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}

//DELETE
public delete(id: number): Observable<any> {
return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
}  

}
