import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../model/Paciente';

@Component({
  selector: 'app-risco-lst',
  templateUrl: './risco-lst.component.html',
  styleUrls: ['./risco-lst.component.css'],
})
export class RiscoLstComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor() {}

  ngOnInit(): void {}
}
