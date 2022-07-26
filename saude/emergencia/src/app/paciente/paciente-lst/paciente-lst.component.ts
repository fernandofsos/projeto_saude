
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/model/estado';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Paciente } from '../model/Paciente';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DadosModal } from 'src/app/shared/model/dados-modal';

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
                private activatedRoute: ActivatedRoute) { }

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

        if(this.cpf.length > 5){
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

  }

  getPacienteNome(): void {

  }

  handleMessage(msg: string , type: string): void {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.message = msg;
    this.bsModalRef.content.type = type;
  }

  novoPaciente(): void {
    this.router.navigate(['pacientes/paciente-add']);
  }


  preparaDesativacao(paciente: Paciente): void {
    console.log("prepara delecao");
    this.pacienteSelecionado = paciente;
    console.log(this.pacienteSelecionado);
  //this.showModalConfirmaDesativar(`Deseja desativar ${this.pacienteSelecionado.nome} ?`)
  }


  novoCadastro(): void {

    console.log(this.valor);
    console.log(this.nome);
    console.log(this.cpf);
    //this.router.navigate(['/clientes/form']);
  }

  deletarCliente(): void{
    console.log("deletarCliente");
  }

  // showModalConfirmaDesativar(msg: string): void {
  //   this.modalUtilService.showModalConfima('Desativar Cliente',msg )
  //     .subscribe( result => {
  //         console.log("retorno");
  //         console.log(result);
  //         console.log(result['Justificativa'] );
  //         this.dados = result;
  //         console.log(this.dados.Justificativa);
  //         if(this.dados.confirmResult){
  //           console.log('entrou no confirma resultado showModalConfirma')
  //           this. desativarCliente();
  //         }
  //   })
  // }


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

  // handleMessage(msg: string , type: string): void {
  //   //this.bsModalRef = this.modalService.show(AlertModalComponent);
  //   this.bsModalRef.content.message = msg;
  //   this.bsModalRef.content.type = type;
  // }

}
