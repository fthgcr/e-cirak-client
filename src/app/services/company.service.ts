import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { map, tap, retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl='/Company/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<Company[]>(this.apiUrl+"/list");
}

public getById(id: number) {
  return this.http.get<[Company]>(this.apiUrl+`${id}`);
}

// INSERT  
public create(company: Object): Observable<Object> {
  return this.http.post(this.apiUrl, company);
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
public updateCompany (id, company): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(company), this.httpOptions).pipe(
    tap(_ => console.log(`updated company id=${id}`))
    
  );
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}
public getCompany(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
}
 

}
