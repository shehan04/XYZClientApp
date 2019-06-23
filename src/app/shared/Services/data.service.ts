import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService  } from '../utils/config.service';

@Injectable()
export class DataService {
private baseUrl:string;
private actionUrl:string;
  constructor(private configurationService:ConfigService,private http: HttpClient) {
    this.baseUrl=configurationService._apiURI;
  }
public getAll<T>(action:string) : Observable<T>
{
  const token = localStorage.getItem('auth_token');
   const headers  = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Authorization', 'Bearer ' + token);
this.actionUrl=this.baseUrl+action;
return this.http.get<T>(this.actionUrl, {headers: headers});
}

public getSingle<T>(action:string,id:number):Observable<T>
{
  const token = localStorage.getItem('auth_token');
   const headers  = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Authorization', 'Bearer ' + token);
  this.actionUrl=this.baseUrl+action;
  return this.http.get<T>(this.actionUrl+'?id='+id, {headers: headers});
}
public add<T>(action:string,object:any):Observable<T>
{
  this.actionUrl=this.baseUrl+action;
  const token = localStorage.getItem('auth_token');
  const headers  = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', 'Bearer ' + token);
  return this.http.post<T>(this.actionUrl,object, {headers: headers});
}
public update<T>(action:string,id: string, object: any): Observable<T> {
  this.actionUrl=this.baseUrl+action;
  return this.http.put<T>(this.actionUrl + id, JSON.stringify(object));
}

public delete<T>(action:string,id: number): Observable<T> {
  this.actionUrl=this.baseUrl+action;
  return this.http.delete<T>(this.actionUrl + id);
}
}
