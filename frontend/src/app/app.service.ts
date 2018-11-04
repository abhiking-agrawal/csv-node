import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from "rxjs/index";
import { catchError, tap } from 'rxjs/operators';
import { ApiResponse } from './Model/apiResponce.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl: string = 'https://node-csv.herokuapp.com/api/';
  constructor(private http: HttpClient) { }

  getRecords() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'data');
  }

  deleteRecord(recordId):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.baseUrl + 'data/' + recordId);
  }

  uploadFile(file){
    const form = new FormData();
    form.append('file', file, file.name);
    return this.http.post<ApiResponse>(this.baseUrl + 'upload', form);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       
      console.error(error); // log to console
 
      return of(result as T);
    };
  }
 
 
}
