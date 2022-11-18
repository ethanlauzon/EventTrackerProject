import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  baseUrl = 'http://localhost:8087/';
  url = this.baseUrl + 'api/trainers';
  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TrainerService.index():error retrieving Trainer list: ' + err)
        );
      })
    );
  }
}
