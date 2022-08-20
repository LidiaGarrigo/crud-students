
import { catchError, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Student from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiServiceService<T> {

  constructor(protected http: HttpClient) { }

  getData(params: string): Observable<T> {
    console.log("Esto es el servicio abstracto");
    return this.http.get<T>(environment.apiUrl + params);
  }

  addData(params: string, body: T) {
    return this.http.post(`${environment.apiUrl}${params}`, body).subscribe((res) => console.log(res));
  }

  deleteData(params: string, id: number) {
    return this.http.delete(`${environment.apiUrl}${params}/${id}`).subscribe();
  }
  updateData(params: string, body: T) {
    console.log('aquí crida api', body);
    return this.http.patch(`${environment.apiUrl}${params}`, body).subscribe();

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
