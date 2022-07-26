
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteAddComponent } from './paciente-add/paciente-add.component';
import { PacienteLstComponent } from './paciente-lst/paciente-lst.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { RiscoLstComponent } from './risco/risco-lst/risco-lst.component';
import { RiscoAddComponent } from './risco/risco-add/risco-add.component';

@NgModule({
  declarations: [
    PacienteLstComponent,
    PacienteAddComponent,
    RiscoLstComponent,
    RiscoAddComponent,

  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxMaskModule.forChild()
  ], exports:[
    PacienteLstComponent,
    PacienteAddComponent,
  ]
})
export class PacienteModule { }
