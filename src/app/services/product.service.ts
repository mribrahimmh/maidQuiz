import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Dto } from '../models/dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(protected httpClient: HttpClient) { }

    public getUsers(page: number){
    var http;
    http = this.httpClient.get(`${environment.apiUrl}/users?page=${page}`);
    return http.pipe(
      map((res: any) => {
        return res
      }),
      catchError(error => {
        console.log(error.error);
        return of(false);
      }));
    }


    public geuser(userid:any){
      var http;
      http= this.httpClient.get(`${environment.apiUrl}/users/${userid}`);
      return http.pipe(
        map((res:any) => {
          return res}),
        catchError(error => {
          console.log(error.error);
          return of(false);
        }));
      }
  }
