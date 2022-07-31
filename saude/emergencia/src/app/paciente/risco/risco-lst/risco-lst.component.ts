import { RiscoService } from './../../../services/risco.service';
import { RecepcaoDto } from '../../dto/RecepcaoDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risco-lst',
  templateUrl: './risco-lst.component.html',
  styleUrls: ['./risco-lst.component.css'],
})

export class RiscoLstComponent implements OnInit {

  lstRecepcaoDto: RecepcaoDto[] = [];


  constructor(private riscoService: RiscoService) {}

  ngOnInit(): void {
    this.getRecepcao();
  }

  getRecepcao(): void {
    this.riscoService.listaRecepcao().subscribe(result =>  {
      this.lstRecepcaoDto = result.map(r => ({
        ...r
      }))

   }, error => {
     console.log('retorno Erro getPacienteCpf service');
     console.log(error.status);
     console.log(error);
     console.log(error.error.error_description);
     console.log(error.message);
     this.lstRecepcaoDto =  [];
    })
  }


}
