import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { todo } from '../components/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findbyid(id: any):Observable<todo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<todo>(url);


  }

  findAll(): Observable<todo[]>{
    return this.http.get<todo[]>(this.baseUrl);
  }
   
  update(todo:todo): Observable<todo> {
    const url = `${this.baseUrl}/${todo.id}`
    return this.http.put<todo>(url, todo);

  }

  delete(id:any):Observable<void>{
    const url = `${this.baseUrl}/${id}`
return this.http.delete<void>(url);
  }
  
  create(todo:todo):Observable<todo>{
    return this.http.post<todo>(this.baseUrl,todo);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK',{
    horizontalPosition:'end',
    verticalPosition: 'top',
    duration:400
  })
  }
}
