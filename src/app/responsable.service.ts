import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Responsable } from './responsable';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

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
    getResponsables (): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.responsablesUrl)
      .pipe(
        tap(_ => this.log('fetched responsables')),
        catchError(this.handleError<Responsable[]>('getResponsables', []))
      );
    }
    /** GET operativos by id. Will 404 if id not found */
    getResponsable(id: number): Observable<Responsable> {
    const url = `${this.responsablesUrl}/${id}`;
      return this.http.get<Responsable>(url).pipe(
       tap(_ => this.log(`fetched responsable id=${id}`)),
        catchError(this.handleError<Responsable>(`getResponsable id=${id}`))
      );
    }
    /** PUT: update the hero on the server */
    updateResponsable (responsable: Responsable): Observable<any> {
    return this.http.put(this.responsablesUrl, responsable, this.httpOptions).pipe(
      tap(_ => this.log(`updated responsable id=${responsable.id}`)),
      catchError(this.handleError<any>('updateResponsable'))
      );
    }
    addResponsable (responsable: Responsable): Observable<Responsable> {
      return this.http.post<Responsable>(this.responsablesUrl, responsable, this.httpOptions).pipe(
        tap((newResponsable: Responsable) => this.log(`added responsable w/ id=${newResponsable.id}`)),
        catchError(this.handleError<Responsable>('addResponsable'))
      );
    }
  
    /** DELETE: delete the hero from the server */
    deleteResponsable (responsable: Responsable | number): Observable<Responsable> {
      const id = typeof responsable === 'number' ? responsable : responsable.id;
      const url = `${this.responsablesUrl}/${id}`;
  
      return this.http.delete<Responsable>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted responsable id=${id}`)),
        catchError(this.handleError<Responsable>('deleteResponsable'))
    );
  }
  
  /* GET operativos whose name contains search term */
  searchResponsables(term: string): Observable<Responsable[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Responsable[]>(`${this.responsablesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found responsables matching "${term}"`)),
      catchError(this.handleError<Responsable[]>('searchResponsables', []))
    );
  }
  
    httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
/** Log a SvcOperativoService message with the MessageService */
private log(message: string) {
this.messageService.add(`ResponsablesService: ${message}`);
}
private responsablesUrl = 'api/responsables';  // URL to web api
  
constructor(
private messageService: MessageService,
private http: HttpClient,
      ) { }
  }