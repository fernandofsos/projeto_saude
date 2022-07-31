import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../model/Paciente';


@Component({
  selector: 'app-paciente-add',
  templateUrl: './paciente-add.component.html',
  styleUrls: ['./paciente-add.component.css'],
})
export class PacienteAddComponent implements OnInit {
  pacienteForm: FormGroup;
  id: number = 0;
  lstPaciente: Paciente[] = [];
  paciente: Paciente = new Paciente();
  idSexoSelecionado: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute)
   {
    const nav = this.router.getCurrentNavigation();
    const param: any = nav.extras.state
    this.paciente = {...param}
   }

  ngOnInit(): void {
    this.pacienteForm = this.formBuilder.group({
      id: [this.paciente.id, [Validators.required]],
      prontuario: [this.paciente.prontuario, [Validators.required]],
      cpf: [this.paciente.cpf, [Validators.required]],
      cns: [this.paciente.cns, [Validators.required]],
      dataNascimento: [this.paciente.dataNascimento, [Validators.required]],
      nome: [this.paciente.nome, [Validators.required]],
      nomeSocial: [this.paciente.nomeSocial],
      sexo: [this.paciente.sexo, [Validators.required]],
      email: [this.paciente.email],
      mae: [this.paciente.mae, [Validators.required]],
      telefone: [this.paciente.telefone],
      celular: [this.paciente.celular],
    });

    // this.activatedRoute.params.subscribe((param) => {
    //   console.log('entrou aqui no onInit');
    //   console.log(param);
    //   console.log(param['id']);
    //   //PEGA ID DO FORNECEDOR VIA PARAMETRO
    //   this.paciente.idPaciente = param['id'];
    //   console.log('**********************inicio************************');
    //   console.log(this.paciente.idPaciente);
    // });
  }

  getPaciente(): void {

  }

  alteraPaciente(): void {

  }

  inseriPaciente(): void {

  }

  onSubmit(): void {
    console.log('*****************Passou aqui onSubmit********');
  }

  voltarLista(): void {
    this.router.navigate(['/pacientes/paciente-lst']);
  }

}
