import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BACKEND_URL} from '../configuartion/config.const';
import {Observable, of} from 'rxjs';
import {BusinessCard} from '../interfaces/business-card';
import {catchError, tap} from 'rxjs/operators';
import {ConsoleService} from './console.service';

@Injectable({
  /* is provided in any class */
  providedIn: 'root'
})

export class DataControllerService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private console: ConsoleService) {
  }

  /** GET all business cards from the server */
  public getAllBusinessCards(): Observable<BusinessCard[]> {
    return this.http.get<BusinessCard[]>(BACKEND_URL + '/data/all/business-card')
      .pipe(
        tap(_ => this.log('get all business cards')),
        catchError(this.handleError<BusinessCard[]>('getAllBusinessCards', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a console message with the ConsoleService */
  private log(message: string): void {
    this.console.add(`Data Controller: ${message}`);
  }
}
