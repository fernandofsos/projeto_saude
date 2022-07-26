import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { DadosModal } from '../model/dados-modal';

@Component({
  selector: 'app-modal-confirma',
  templateUrl: './modal-confirma.component.html',
  styleUrls: ['./modal-confirma.component.css']
})
export class ModalConfirmaComponent implements OnInit {

  @Input() title:string;
  @Input() message:string;

  confirmResult: Subject<boolean>
  confirmResult2: Subject<DadosModal>

  dados: DadosModal = new DadosModal();


  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.confirmResult = new Subject();
    this.confirmResult2 = new Subject();
  }

  onClose(): void {
    console.log("passou onclose");
    this.dados.Justificativa="";
    this.dados.confirmResult=false;
    this.confirmResult2.next(this.dados);
    this.bsModalRef.hide();
    //this.confirmResult.next(false);
    //this.confirmAndClose(false);
  }

  onConfirm(): void {
    console.log("passou onConfirm");
    this.dados.confirmResult=true;
    this.dados.Justificativa= this.dados.Justificativa;
    //this.confirmResult.next(this.dados);
    this.confirmResult2.next(this.dados);
    this.bsModalRef.hide();
  }


  //OUTRO TIPO DE RETORNO
  private confirmAndClose(value: boolean){
      this.confirmResult.next(value);
      this.bsModalRef.hide();
  }

}
