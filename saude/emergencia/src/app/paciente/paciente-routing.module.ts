import { AtestadoLstComponent } from './medico/atestado-lst/atestado-lst.component';
import { MedicoAddComponent } from './medico/medico-add/medico-add.component';
import { MedicoLstComponent } from './medico/medico-lst/medico-lst.component';
import { RiscoLstComponent } from './risco/risco-lst/risco-lst.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PacienteAddComponent } from './admissao/paciente-add/paciente-add.component';
import { PacienteLstComponent } from './admissao/paciente-lst/paciente-lst.component';

const routes: Routes = [
  {path: 'pacientes', component: LayoutComponent, canActivate: [AuthGuard], children:[
    {path: 'paciente-add', component: PacienteAddComponent},
    {path: 'paciente/:id', component: PacienteAddComponent},
    {path: 'paciente-lst', component: PacienteLstComponent},
    {path: '', redirectTo: '/pacientes/paciente-lst' , pathMatch: 'full' },
  ]},
    {path: 'risco', component: LayoutComponent, canActivate: [AuthGuard], children:[
    {path: 'risco-lst', component: RiscoLstComponent},
   ]},
    {path: 'medico', component: LayoutComponent, canActivate: [AuthGuard], children:[
    {path: 'medico-lst', component: MedicoLstComponent},
    {path: 'medico-add', component: MedicoAddComponent},
    {path: 'atestado-lst', component: AtestadoLstComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
