import { ModalUtilService } from './../../services/modal-util.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DadosModal } from 'src/app/shared/model/dados-modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  bsModalRef:BsModalRef;
  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  dados: DadosModal = new DadosModal();

  constructor( private clientesService: ClientesService,
               private router: Router,
               private modalUtilService: ModalUtilService,
               private modalService: BsModalService ) { }

  ngOnInit(): void {
    this.clientesService.getListaClientes().subscribe(result =>  {
      this.clientes = result;
      console.log(result)
   }, error => {
     console.log('retorno de erro clientes service');
     console.log(error.status);
     console.log(error);
     console.log(error.error.error_description);
     console.log(error.message);
     this.clientes =  [];
    })
  }

  preparaDesativacao(cliente: Cliente): void {
    console.log("prepara delecao");
    this.clienteSelecionado = cliente;
    console.log(this.clienteSelecionado);
  this.showModalConfirmaDesativar(`Deseja desativar ${this.clienteSelecionado.nome} ?`)
  }

  novoCadastro(): void{
    this.router.navigate(['/clientes/form']);
  }

  deletarCliente(): void{
    console.log("deletarCliente");
  }

  showModalConfirmaDesativar(msg: string): void {
    this.modalUtilService.showModalConfima('Desativar Cliente',msg )
      .subscribe( result => {
          console.log("retorno");
          console.log(result);
          console.log(result['Justificativa'] );
          this.dados = result;
          console.log(this.dados.Justificativa);
          if(this.dados.confirmResult){
            console.log('entrou no confirma resultado showModalConfirma')
            this. desativarCliente();
          }
    })
  }


  desativarCliente(): void {
    this.clientesService.desativarCliente(this.clienteSelecionado)
        .subscribe( result =>{
          this.handleMessage('Operação Realizada com Sucesso!', 'success');
          this. ngOnInit();
        },
        error => {
          this.handleMessage('Operação Realizada com Sucesso!', 'danger');
          this. ngOnInit();
        });
  }

  handleMessage(msg: string , type: string): void {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.message = msg;
    this.bsModalRef.content.type = type;
  }


}
