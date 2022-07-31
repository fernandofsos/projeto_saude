import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecepcaoDto } from '../paciente/dto/RecepcaoDto';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private readonly API = environment.apiUrlBaseMock + '/medico';

  constructor(private httpClient: HttpClient) {}

  listaRecepcao(): Observable<RecepcaoDto[]> {
    return this.httpClient.get<RecepcaoDto[]>(this.API + '/recepcao');
  }
}
