import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConsoleService} from './console.service';
import {Observable, of} from 'rxjs';
import {Game} from '../interfaces/game';
import {Player} from '../interfaces/player';

@Injectable({
  /* is provided in any class */
  providedIn: 'root'
})
export class GameControllerService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private console: ConsoleService) {
  }

  public joinGame(player: Player, game: Game): void {

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
    this.console.add(`Game Controller: ${message}`);
  }
}
