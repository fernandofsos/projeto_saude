import { RiscoLstComponent } from './risco/risco-lst/risco-lst.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PacienteAddComponent } from './paciente-add/paciente-add.component';
import { PacienteLstComponent } from './paciente-lst/paciente-lst.component';

const routes: Routes = [
  {path: 'pacientes', component: LayoutComponent, canActivate: [AuthGuard], children:[
    {path: 'paciente-add', component: PacienteAddComponent},
    {path: 'paciente/:id', component: PacienteLstComponent},
    {path: 'paciente-lst', component: PacienteLstComponent},
    {path: '', redirectTo: '/pacientes/paciente-lst' , pathMatch: 'full' },
  ]},{path: 'risco', component: LayoutComponent, canActivate: [AuthGuard], children:[
     {path: 'risco-lst', component: RiscoLstComponent},
   ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
