import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sneighborhood } from '../models/sneighborhood.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SneighborhoodService {

  private apiUrl = '/SNeighborhood/';

  constructor(private http: HttpClient) { }

  //LIST
  public get() {
    return this.http.get<Sneighborhood[]>(this.apiUrl+"list");
  }

  public getNeighb(id: number) {
    return this.http.get<[Sneighborhood]>(this.apiUrl+"/list/"+`${id}`);
  }

  public getByName(username:string){
    console.log(`${this.apiUrl}list/by/${username}`);
    return this.http.get<Sneighborhood[]>(`${this.apiUrl}/list/by/${username}`);
  }

  //INSERT  
  public create(sneighborhood : Object): Observable<Object> {
    return this.http.post(this.apiUrl, sneighborhood);
  }  

  //DELETE
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  //UPDATE  
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
  };

  public updateNeighborhood (id, neighborhood): Observable<any> {
    return this.http.put(this.apiUrl  + id, JSON.stringify(neighborhood), this.httpOptions).pipe(
    tap(_ => console.log(`updated district id=${id}`))   
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  public getNeighborhood(id): Observable<any> {
    return this.http.get(this.apiUrl  + id).pipe(
      map(this.extractData));
  }
  
}
