import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { todo } from '../components/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll(): Observable<todo[]>{
    return this.http.get<todo[]>(this.baseUrl);
  }
}
