import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = 'http://localhost:8080/pessoa';
  constructor(private httpClient: HttpClient) {}

  getPessoas(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.apiUrl);
  }
}
