import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmaComponent } from './modal-confirma/modal-confirma.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { FormsModule } from '@angular/forms';
import { PhonePipe } from './phone-pipe/phone.pipe';

@NgModule({
  declarations: [
     ModalConfirmaComponent,
     AlertModalComponent,
     PhonePipe
    ],
  imports: [
    CommonModule,
    FormsModule

  ], exports:[
    AlertModalComponent,
    PhonePipe
  ], entryComponents:[
     AlertModalComponent,
     ModalConfirmaComponent
  ]
})
export class SharedModule { }
