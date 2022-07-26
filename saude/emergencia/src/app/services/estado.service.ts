import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../model/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private readonly API = environment.apiUrlBase + '/estado'

  constructor(private httpClient: HttpClient) { }

  getListaEstado(): Observable<Estado[]> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.httpClient.get<Estado[]>(this.API, {headers});
  }

  getEstadoById(id: number):Observable<Estado>{
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.httpClient.get<Estado>(`${this.API}/${id}`, {headers})
  }

}
