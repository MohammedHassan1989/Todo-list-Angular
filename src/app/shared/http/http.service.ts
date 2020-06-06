import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

const baseURL: string = 'http://localhost:4000/api';
const httpheader = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Authorization': ''
    })
};
@Injectable({ providedIn: 'root' })
export class HttpService {



    constructor(private httpClient: HttpClient) {
    }
    get(url): Observable<any> {
        let URL = baseURL + '/' + url;
        return this.httpClient.get(URL, httpheader)
        .pipe(
            catchError(this.errorHandler)
          );
    }
    post(url, obj: any): Observable<any> {
        let URL = baseURL + '/' + url;
        return this.httpClient.post(URL, obj, httpheader)
        .pipe(
            catchError(this.errorHandler)
          );
    }

    update(url, obj: any) {
        let URL = baseURL + '/' + url;
        return this.httpClient.put(URL, obj, httpheader)
        .pipe(
            catchError(this.errorHandler)
          );
    }
    delete(url) {
        let URL = baseURL + '/' + url;
        return this.httpClient.delete(URL, httpheader)
        .pipe(
            catchError(this.errorHandler)
          );
    }

    errorHandler(error:HttpErrorResponse):Observable<any>{
return throwError(error.status)

    }

    
}