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

  show(trainerId: number): Observable<Trainer> {
    return this.http.get<Trainer>(this.url + '/' + trainerId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.show():error retrieving Todo: ' + err)
        );
      })
    );
  }

  create(trainer: Trainer) {
    return this.http.post<Trainer>(this.url, trainer).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.create():error creating Todo: ' + err)
        );
      })
    );
  }
  update(trainer: Trainer) {
    return this.http.put<Trainer>(this.url + '/' + trainer.id, trainer).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.update():error updating Todo: ' + err)
        );
      })
    );
  }
  destroy(id: number) {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.destroy():error deleting Todo: ' + err)
        );
      })
    );
  }
}
