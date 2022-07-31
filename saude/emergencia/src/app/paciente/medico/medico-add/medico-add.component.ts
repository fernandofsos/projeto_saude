import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RecepcaoDto } from '../../dto/RecepcaoDto';

@Component({
  selector: 'app-medico-add',
  templateUrl: './medico-add.component.html',
  styleUrls: ['./medico-add.component.css'],
})
export class MedicoAddComponent implements OnInit {
  recepcaoDto: RecepcaoDto = new RecepcaoDto();

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const param: any = nav.extras.state;
    this.recepcaoDto = { ...param };
  }

  ngOnInit(): void {}

  admissaoPacienteByState(recepcaoDto: RecepcaoDto): void {
    this.router.navigateByUrl('medico/atestado-lst', { state: recepcaoDto })
  }
}
