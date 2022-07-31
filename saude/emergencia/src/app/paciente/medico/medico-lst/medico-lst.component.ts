import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from 'src/app/services/medico.service';
import { RecepcaoDto } from '../../dto/RecepcaoDto';

@Component({
  selector: 'app-medico-lst',
  templateUrl: './medico-lst.component.html',
  styleUrls: ['./medico-lst.component.css']
})
export class MedicoLstComponent implements OnInit {

  lstRecepcaoDto: RecepcaoDto[] = [];


  constructor(private medicoService: MedicoService,
              private router: Router) { }

  ngOnInit(): void {
    this.getRecepcao();
  }

  getRecepcao(): void {
    this.medicoService.listaRecepcao().subscribe(result =>  {
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

  admissaoPacienteByState(recepcaoDto: RecepcaoDto): void {
    this.router.navigateByUrl('medico/medico-add', { state: recepcaoDto })
  }

}
