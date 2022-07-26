import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../model/Paciente';

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pacienteForm = this.formBuilder.group({
      idPaciente: [null, [Validators.required]],
      prontuario: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cns: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      nomeSocial: [null],
      sexo: [null, [Validators.required]],
      email: [null],
      mae: [null, [Validators.required]],
      telefone: [null],
      celular: [null],
    });

    this.activatedRoute.params.subscribe((param) => {
      console.log('entrou aqui no onInit');
      console.log(param);
      console.log(param['id']);
      //PEGA ID DO FORNECEDOR VIA PARAMETRO
      this.paciente.idPaciente = param['id'];
      console.log('**********************inicio************************');
      console.log(this.paciente.idPaciente);
    });
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
    console.log('********voltarLista******')
    this.router.navigate(['/fornecedor/lista']);
  }

}
