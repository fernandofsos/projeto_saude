import { MedicoAddComponent } from './medico/medico-add/medico-add.component';
import { MedicoLstComponent } from './medico/medico-lst/medico-lst.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteAddComponent } from './admissao/paciente-add/paciente-add.component';
import { PacienteLstComponent } from './admissao/paciente-lst/paciente-lst.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { RiscoLstComponent } from './risco/risco-lst/risco-lst.component';
import { RiscoAddComponent } from './risco/risco-add/risco-add.component';
import { AtestadoLstComponent } from './medico/atestado-lst/atestado-lst.component';

@NgModule({
  declarations: [
    PacienteLstComponent,
    PacienteAddComponent,
    RiscoLstComponent,
    RiscoAddComponent,
    MedicoLstComponent,
    MedicoAddComponent,
    AtestadoLstComponent
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
