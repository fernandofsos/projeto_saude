import { RecepcaoDto } from '../paciente/dto/RecepcaoDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiscoService {

  private readonly API = environment.apiUrlBaseMock + '/risco';

  constructor(private httpClient: HttpClient) {}

  listaRecepcao(): Observable<RecepcaoDto[]> {
    return this.httpClient.get<RecepcaoDto[]>(this.API + '/recepcao');
  }

}
