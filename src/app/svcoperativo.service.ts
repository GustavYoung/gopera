import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Operativo } from './operativo';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SvcoperativoService {

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  }
  /** GET operativos from the server */
  getOperativos (): Observable<Operativo[]> {
  return this.http.get<Operativo[]>(this.operativosUrl)
    .pipe(
      tap(_ => this.log('fetched operativos')),
      catchError(this.handleError<Operativo[]>('getOperativos', []))
    );
  }
  /** GET operativos by id. Will 404 if id not found */
  getOperativo(id: number): Observable<Operativo> {
  const url = `${this.operativosUrl}/${id}`;
    return this.http.get<Operativo>(url).pipe(
     tap(_ => this.log(`fetched operativo id=${id}`)),
      catchError(this.handleError<Operativo>(`getOperativo id=${id}`))
    );
  }
  /** PUT: update the hero on the server */
  updateOperativo (operativo: Operativo): Observable<any> {
  return this.http.put(this.operativosUrl, operativo, this.httpOptions).pipe(
    tap(_ => this.log(`updated operativo id=${operativo.id}`)),
    catchError(this.handleError<any>('updateOperativo'))
    );
  }
  addOperativo (operativo: Operativo): Observable<Operativo> {
    return this.http.post<Operativo>(this.operativosUrl, operativo, this.httpOptions).pipe(
      tap((newOperativo: Operativo) => this.log(`added operativo w/ id=${newOperativo.id}`)),
      catchError(this.handleError<Operativo>('addOperativo'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteOperativo (operativo: Operativo | number): Observable<Operativo> {
    const id = typeof operativo === 'number' ? operativo : operativo.id;
    const url = `${this.operativosUrl}/${id}`;

    return this.http.delete<Operativo>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted operativo id=${id}`)),
      catchError(this.handleError<Operativo>('deleteOperativo'))
  );
}

/* GET operativos whose name contains search term */
searchOperativos(term: string): Observable<Operativo[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Operativo[]>(`${this.operativosUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found operativos matching "${term}"`)),
    catchError(this.handleError<Operativo[]>('searchOperativos', []))
  );
}

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  /** Log a SvcOperativoService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`OperativoService: ${message}`);
  }
  private operativosUrl = 'api/operativos';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }
}
