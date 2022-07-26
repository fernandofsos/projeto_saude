import { Subject } from 'rxjs';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';


import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../model/cliente';
import { ModalConfirmaComponent } from 'src/app/shared/modal-confirma/modal-confirma.component';
import { ModalUtilService } from 'src/app/services/modal-util.service';
import { DadosModal } from 'src/app/shared/model/dados-modal';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit , OnDestroy{

  cliente: Cliente = new Cliente();
  id: number;
  bsModalRef:BsModalRef;
  dados: DadosModal = new DadosModal();

  constructor( private clientesService: ClientesService,
               private router: Router ,
               private activatedRoute: ActivatedRoute,
               private modalService: BsModalService,
               private modalUtilService: ModalUtilService
               ) { }

  ngOnInit(): void {
    this.activatedRoute.params
       .subscribe(result => {
         console.log('entrou aqui no onInit');
         console.log(result);
         console.log(result['id']);
         //PEGA ID DO CLIENTE VIA PARAMETRO
         this.id = result['id']
        });

     if (this.id != undefined){
       console.log("entrou no if");
       this.getClienteById(this.id);
     }
  }

  ngOnDestroy(): void {

  }

  onSubmit(){
    this.cliente = {...this.cliente,
                    nome : this.cliente.nome.toLocaleUpperCase(),
                    complemento : this.cliente.complemento.toLocaleUpperCase(),
                    endereco : this.cliente.endereco.toLocaleUpperCase(),
                    numero : this.cliente.numero.toLocaleUpperCase(),
                   }
    if(this.cliente.idCliente){
      console.log('chama atualizar')
      this.showModalConfirmaEditar('Deseja Alterar o cadastro de cliente?');
    }else{
       console.log("Entrou aqui no novo")
       console.log("entrou onsubmiti"+ this.cliente.nome)
       this.clientesService
           .salvar(this.cliente).subscribe( result =>
            {
              this.handleSucesso();
              this.cliente = new Cliente();
            }, error => {
              if(error['status'] == 401){
                this.handleErro('Token invalido')
                this.router.navigate(['/login']);
                localStorage.removeItem('access_token');
              } else if (error['status'] == 0){
                this.handleErro('Sistema off-line');
                console.log(localStorage.getItem('access_token'))
              } else {
                this.handleErro(error.message);
              }
            });
    }
  }


  voltarLista(): void {
      this.router.navigate(['/clientes/lista']);
  }

  getClienteById(id: number): void {
    console.log("entrou no getCliente")
      this.clientesService.getClienteById(id).subscribe(result => {
        console.log('entrou aqui no getClienteById');
        //console.log(resp);
        //this.cliente ={...resp,id:resp.idCliente};
        console.log(result);
        this.cliente = result;
      })
  }

  atualizar(): void {
    this.clientesService.atualizarCliente(this.cliente)
        .subscribe( result =>{
          alert("Operação realizada com sucesso!");
          this.cliente = result;
        },
        error => {
          console.log(error)
           alert("Error au tentar salvar o Clisnte. "+error.message)
        });
  }

  showModalConfirmaEditar(msg: string): void {
    this.modalUtilService.showModalConfima('vaida certo titulo',msg)
      .subscribe( result => {
          console.log("retorno");
          console.log(result);
          console.log(result['Justificativa'] );
          this.dados = result;
          console.log(this.dados.Justificativa);
          if(this.dados.confirmResult){
            console.log('entrou no confirma resultado showModalConfirma')
            this.atualizar();
          }
    })
  }

  handleErro(msg: string): void {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.message = msg;
    this.bsModalRef.content.type = 'danger';
  }

  handleSucesso(): void {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.message = 'Cadastro Realizado com Sucesso!';
    this.bsModalRef.content.type = 'success';
  }


}
