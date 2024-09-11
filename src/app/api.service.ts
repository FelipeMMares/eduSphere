import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api'; // URL do backend Spring Boot

  constructor(private http: HttpClient) { }

  // Método para obter uma mensagem do backend
  getHello(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/hello`);
  }
  // Método para autenticar o usuário
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }
}