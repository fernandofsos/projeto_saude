
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { CpfPipe } from '../util/cpf.pipe';
import { PhonePipe } from '../util/phone.pipe';


@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesListaComponent,
    CpfPipe,
    PhonePipe
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,

  ], exports:[
    ClientesFormComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
