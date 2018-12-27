import { AuthentificationProvider } from './../authentification/authentification';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http/src/params';

@Injectable()
export class AbtractServiceProvider {

  constructor(public http: HttpClient,auth:AuthentificationProvider) {
    }

    getAll<T>(url: string): Observable<T> {
      return this.http.get<T>(url);
  }

  getById<T>(url:string,params:HttpParams):Observable<T> {
    return this.http.get<T>(url,{params});
}

  post<T>(url: string, body: string): Observable<T> {
      return this.http.post<T>(url, body);
  }

  put<T>(url: string, body: string): Observable<T> {
      return this.http.put<T>(url, body);
  }

  delete<T>(url: string): Observable<T> {
      return this.http.delete<T>(url);
  }

  patch<T>(url: string, body: string): Observable<T> {
      return this.http.patch<T>(url, body);
  }
}
