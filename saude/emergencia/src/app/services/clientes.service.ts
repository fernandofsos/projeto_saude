import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../clientes/model/cliente';

@Injectable({
  providedIn: 'root'

})
export class ClientesService {

  private readonly API = environment.apiUrlBase + '/cliente'  //  'http://localhost:3004/cliente';

  constructor( private httpClient: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente> {
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      }
      console.log(cliente);
      return this.httpClient.post<Cliente>(this.API,cliente, {headers} );
  }

  getClienteById(id: number):Observable<Cliente>{
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      }
      return this.httpClient.get<Cliente>(`${this.API}/${id}`, {headers})
  }

  getListaClientes(): Observable<Cliente[]> {
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      }
      console.log('*********************************getListaClientes');
      console.log(this.API);
      return this.httpClient.get<Cliente[]>(this.API, {headers});
  }

  atualizarCliente(cliente: Cliente): Observable<Cliente> {
      console.log('passou aqui pelo atualizarCliente');
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      }
      console.log("atualizarCliente");
      console.log(this.API);
      console.log(cliente);
      return this.httpClient.put<Cliente>(`${this.API}`,cliente,{headers})
  }

  desativarCliente(cliente: Cliente): Observable<Cliente> {
    console.log('passou aqui pelo atualizarCliente');
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    console.log("atualizarCliente");
    console.log(this.API);
    console.log(cliente);
    return this.httpClient.put<Cliente>(`${this.API}/desativar`,cliente,{headers})
  }
}
