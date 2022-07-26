import { DadosModal } from './../shared/model/dados-modal';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalConfirmaComponent } from '../shared/modal-confirma/modal-confirma.component';

@Injectable({
  providedIn: 'root'
})
export class ModalUtilService {

  bsModalRef:BsModalRef;
  constructor(private modalService: BsModalService) { }

  showModalConfima(title: string, message: string) : Observable<DadosModal> {
    const bsModalRef: BsModalRef = this.modalService.show(ModalConfirmaComponent)
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    return (<ModalConfirmaComponent>bsModalRef.content).confirmResult2;

  }
}
