import { Fornecedor } from './../fornecedor/model/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private readonly API = environment.apiUrlBase + '/fornecedor'

  constructor( private httpClient: HttpClient) { }


  getListaClientes(): Observable<Fornecedor[]>{
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.httpClient.get<Fornecedor[]>(this.API, {headers} );
  }


  pageFornecedor(page: number, size: number): Observable<Page[]>{
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.httpClient.get<Page[]>(`${this.API}?${page}&${size}`, {headers} );
  }

  salvar(fornecedor: Fornecedor) : Observable<Fornecedor> {
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      }
      console.log(fornecedor);
      return this.httpClient.post<Fornecedor>(this.API,fornecedor, {headers} );
  }

  alterar(fornecedor: Fornecedor) : Observable<Fornecedor> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    console.log(fornecedor);
    return this.httpClient.put<Fornecedor>(this.API,fornecedor, {headers} );
  }


  getFornecedorById(id: number):Observable<Fornecedor>{
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.httpClient.get<Fornecedor>(`${this.API}/${id}`, {headers})
  }

}
