import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, shareReplay, tap, throwError } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setListTask = signal<ITask[] | null>(null);
  get getListTask() {
    return this.#setListTask.asReadonly();
  }
  public httpListTask$(): Observable<ITask[]> {
    this.#setListTask.set(null);
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res))
    );
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskid() {
    return this.#setTaskId.asReadonly();
  }
  #setTaskIdError = signal<string | null>(null);
  get getTaskIdError() {
    return this.#setTaskIdError.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask> {
    this.#setListTask.set(null);
    this.#setTaskIdError.set(null);

    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res)),
      catchError((error: HttpErrorResponse) => {
        this.#setTaskIdError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError() {
    return this.#setTaskCreateError.asReadonly();
  }
  public httpTaskCreate$(title: string): Observable<ITask> {
    this.#setTaskCreateError.set(null);

    return this.#http
      .post<ITask>(this.#url(), {
        title,
      })
      .pipe(
        shareReplay(),
        catchError((error: HttpErrorResponse) => {
          this.#setTaskCreateError.set(error.error.message);
          return throwError(() => error);
        })
      );
  }

  public httpTaskUpdate$(title: string, id: string): Observable<ITask> {
    return this.#http
      .patch<ITask>(`${this.#url()}/${id}`, {
        title,
      })
      .pipe(shareReplay());
  }

  public httpTaskDelete$(id: string): Observable<void> {
    return this.#http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay());
  }
}
