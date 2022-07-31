import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../paciente/model/Paciente';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private readonly API = environment.apiUrlBaseMock + '/paciente';

  constructor(private httpClient: HttpClient) {}

  listaPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.API+'/pacientes');
  }

  desativarPaciente(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.API+'/pacientes');
  }

  novoPaciente():Observable<any[]> {
    return this.httpClient.get<any[]>(this.API);
  }


  // listaPacientes(): Observable<Paciente[]> {
  //   const tokenString = localStorage.getItem('access_token');
  //   const token = JSON.parse(tokenString);
  //   const headers = {
  //     Authorization: 'Bearer ' + token.access_token,
  //   };
  //   console.log('*********************************getListaClientes');
  //   console.log(this.API);
  //   return this.httpClient.get<Paciente[]>(this.API, { headers });
  // }
}
