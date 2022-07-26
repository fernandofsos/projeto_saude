import { UtilModule } from './../util/util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FornecedorFormComponent,
    FornecedorListComponent,
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,


  ], exports:[
    FornecedorFormComponent,
    FornecedorListComponent
  ]
})
export class FornecedorModule { }
