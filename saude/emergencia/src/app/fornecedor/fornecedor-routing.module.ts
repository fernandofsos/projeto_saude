import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';

const routes: Routes = [
  {path: 'fornecedor', component: LayoutComponent, children:[
    {path: 'form', component: FornecedorFormComponent},
    {path: 'form/:id', component: FornecedorFormComponent},
    {path: 'lista', component: FornecedorListComponent},
    {path: '', redirectTo: '/fornecedor/lista' , pathMatch: 'full' },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
