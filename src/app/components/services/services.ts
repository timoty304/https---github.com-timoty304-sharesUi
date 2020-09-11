
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
@Injectable({
    providedIn: 'root'
  })
export class service{
   
    constructor(private http: HttpClient){}
    


    getApi(endpoint): Observable<any> {
        console.log('insdie service file', endpoint)
        return this.http.get(endpoint).pipe(
          map(this.extractData));
      }
    
      postApi(endpoint, data): Observable<any> {
        console.log(endpoint, data);
        return this.http.post<any>(endpoint, JSON.stringify(data), this.httpOptions).pipe(
          map((uresponse: Response) => {
            console.log("api res", uresponse)
            return uresponse;
          }), catchError(this.handleError<any>('Login'))
        );
      }
      private extractData(res: Response) {
        let body = res;
        return body || {};
      }

      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': 'checking',
          'Access-Control-Allow-Origin': '*'
        })
      };

      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
}