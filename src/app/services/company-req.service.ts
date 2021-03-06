import { Injectable } from '@angular/core';
import { CompanyReq } from '../models/company-req.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyReqService {

  private apiUrl = '/CompanyReq/';

  constructor(private http: HttpClient) { }

// LIST
public get() {
  return this.http.get<CompanyReq[]>(this.apiUrl+"/list");
}

// INSERT  
public create(companyReq: Object): Observable<Object> {
  return this.http.post(this.apiUrl, companyReq);
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

public update(id, companyReq): Observable<any> {
  return this.http.put(this.apiUrl  + id, JSON.stringify(companyReq), this.httpOptions).pipe(
    tap(_ => console.log(`updated companyReq id=${id}`))    
  );
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

public getCompanyReq(id): Observable<any> {
  return this.http.get(this.apiUrl  + id).pipe(
    map(this.extractData));
} 


}
