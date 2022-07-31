
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/model/estado';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DadosModal } from 'src/app/shared/model/dados-modal';
import { PacienteService } from 'src/app/services/paciente.service';
import { ModalUtilService } from 'src/app/services/modal-util.service';
import { Paciente } from '../../model/Paciente';

@Component({
  selector: 'app-paciente-lst',
  templateUrl: './paciente-lst.component.html',
  styleUrls: ['./paciente-lst.component.css']
})
export class PacienteLstComponent implements OnInit {
  valor: string = '1';
  cpf: string = '';
  nome: string;
  bsModalRef:BsModalRef;
  pacientes: Paciente[] = [];
  paciente: Paciente = new Paciente();
  pacienteSelecionado: Paciente;
  dados: DadosModal = new DadosModal();

 lstEstadoAll: Estado[] = [{
    idEstado: 1,
    sigla: 'cpf',
    nome: 'cpf'
  }, { idEstado: 2,
    sigla: 'nome',
    nome: 'nome'}];


  constructor(  private router: Router,
                private formBuilder: FormBuilder ,
                private modalService: BsModalService,
                private activatedRoute: ActivatedRoute,
                private modalUtilService: ModalUtilService,
                private pacienteService: PacienteService ) { }

  ngOnInit(): void {

  }

  getPacienteCpfNome(): void {
    console.log('passou aqui')
    switch(this.valor) {
      case '1':
        if(this.cpf.length === 11){
          this.getPacienteCpf();
        } else {
          this.handleMessage('Digite o CPF do Pacinete', 'danger');
        }
        break;
      case '2':

        if(this.nome.length > 5){
          this.getPacienteNome();
        } else {
          this.handleMessage('Digite o Nome do Pacinete', 'danger');
        }
        break;
      default:
        console.log('entrou default');
        this.handleMessage('Digite O' + this.valor === '1'? 'CPF no componente': 'Nome no componente', 'danger');
    }

  }

  getPacienteCpf(): void {
    this.pacienteService.listaPacientes().subscribe(result =>  {

      this.pacientes = result.map(r => ({
        ...r, id: r.id
      }))

      ///modelo antigo
      // let x = result.length;
      // for (let i = 0; i < x; i++) {
      //   this.paciente = {...result[i], idPaciente: result[i].id }
      //   this.pacientes.push(this.paciente);
      // }


   }, error => {
     console.log('retorno Erro getPacienteCpf service');
     console.log(error.status);
     console.log(error);
     console.log(error.error.error_description);
     console.log(error.message);
     this.pacientes =  [];
    })
  }

  getPacienteNome(): void {

  }

  novoPaciente(): void {
    this.router.navigate(['pacientes/paciente-add']);
  }

  desativarPaciente(): void{
    console.log("Esse metodo desativa o paciente");
  }

  admissaoPacienteByState(paciente: Paciente): void {
    this.router.navigateByUrl('pacientes/paciente-add', { state: paciente })
  }

  preparaDesativacao(paciente: Paciente): void {
    console.log("prepara Desativacao");
    this.pacienteSelecionado = paciente;
    console.log(this.pacienteSelecionado);
    this.showModalConfirmaDesativar(`Deseja desativar ${this.pacienteSelecionado.nome} ?`)
  }

  showModalConfirmaDesativar(msg: string): void {
    this.modalUtilService.showModalConfima('Desativar Paciente',msg )
      .subscribe( result => {
          console.log("retorno");
          console.log(result);
          console.log(result['Justificativa'] );
          this.dados = result;
          console.log(this.dados.Justificativa);
          if(this.dados.confirmResult){
            console.log('entrou no confirma resultado showModalConfirma')
           /// this. desativarCliente();
          }
    })
  }

  handleMessage(msg: string , type: string): void {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.message = msg;
    this.bsModalRef.content.type = type;
  }

  // desativarCliente(): void {
  //   this.clientesService.desativarCliente(this.clienteSelecionado)
  //       .subscribe( result =>{
  //         this.handleMessage('Operação Realizada com Sucesso!', 'success');
  //         this. ngOnInit();
  //       },
  //       error => {
  //         this.handleMessage('Operação Realizada com Sucesso!', 'danger');
  //         this. ngOnInit();
  //       });
  // }



}
