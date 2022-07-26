import { EstadoService } from './../../services/estado.service';

import { FornecedorService } from './../../services/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fornecedor } from '../model/fornecedor';
import { Estado } from 'src/app/model/estado';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent implements OnInit {


  fornecedorForm: FormGroup;
  fornecedor: Fornecedor = new Fornecedor();
  lstEstadoAll: Estado[] = [];
  subscription: Subscription[] = []
  id: number;

  constructor(private formBuilder: FormBuilder ,
              private fornecedorService: FornecedorService,
              private estadoService: EstadoService ,
              private router: Router ,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

      this.fornecedorForm = this.formBuilder.group({
            idFornecedor: [null,[Validators.required]],
            cpfCnpj: [null,[Validators.required]],
            nome: [null, [Validators.required]],
            idEstado: [null, [Validators.required]],
            //estado: [null],
      })

      this.activatedRoute.params
          .subscribe(result => {
            console.log('entrou aqui no onInit');
            console.log(result);
            console.log(result['id']);
            //PEGA ID DO FORNECEDOR VIA PARAMETRO
            this.id = result['id']
          }
      );

      this.subscription.push(
        this.estadoService.getListaEstado()
             .subscribe( result => {
                console.log("fez a consulta do estado");
                this.lstEstadoAll = result
                console.log(this.lstEstadoAll);
              }, error => {
                console.log("entrou no erro");
                console.log(error);
              })
      )


      if (this.id != undefined){
        console.log("entrou no if do paramentro do fornecedor");
        this.getfornecedorById(this.id);
      }

      this.fornecedorForm.get('idEstado').valueChanges.subscribe( value => {
        console.log('entrou aqui para pegar o IdEsato novo')
        console.log(value);
      })

  }

  onSubmit(): void {

      console.log('*****************Passou aqui onSubmit********')
      //const teste = this.select.value
      this.fornecedor = this.fornecedorForm.value
      console.log(this.fornecedor);
      //this.fornecedor = {...this.fornecedor, nome : this.fornecedor.nome.toLocaleUpperCase() }

      // console.log(this.fornecedorForm.get("nome").value);
      // console.log(this.fornecedorForm.get('cpfCnpj').value);
      // console.log(this.fornecedorForm.value);

     //this.fornecedor.nome = this.fornecedorForm.get('nome').value;
     //this.fornecedor.cpfCnpj = this.fornecedorForm.get('cpfCnpj').value;
     // JSON.parse(this.fornecedorForm.value);

     //this.fornecedor = this.fornecedorForm.value;
     //this.fornecedor.idFornecedor = 1;
     if(this.fornecedor.idFornecedor == null){
       console.log('idfornecedor null ' + this.fornecedor.idFornecedor);
     }else{
      console.log('idfornecedor não está null' + this.fornecedor.idFornecedor);
     }
     console.log(this.fornecedor);


    // this.fornecedor = {...this.fornecedor,f}
    //this.fornecedor = JSON.parse(this.fornecedorForm.value)
    //this.atualizar(JSON.parse(this.fornecedorForm.value));
    //this.atualizar(this.fornecedor)

  }


  atualizar(fornecedor: Fornecedor): void {
      console.log(fornecedor);
      this.fornecedorService.salvar(fornecedor)
          .subscribe( result =>{
            alert("Operação realizada com sucesso!");
            this.fornecedor = result;
          },
          error => {
            console.log(error)
            alert("Error au tentar salvar o Fornecedor. "+error.message)
          });
  }

  alterar(fornecedor: Fornecedor): void {
    console.log(fornecedor);
    this.fornecedorService.alterar(fornecedor)
        .subscribe( result =>{
          alert("Operação realizada com sucesso!");
          this.fornecedor = result;
        },
        error => {
          console.log(error)
          alert("Error au tentar salvar o Fornecedor. "+error.message)
        });
  }

  setSelecionadoEstado(): void {
    console.log('****** selecionado setSelecionadoEstado********')
    console.log(this.fornecedorForm.value);
  }


  getfornecedorById(id: number): void {
    console.log("-----entrou no getfornecedorById-----")
      this.fornecedorService.getFornecedorById(id).subscribe(result => {
        console.log(result);
        this.fornecedor = result;
        console.log(this.fornecedor);
        this.fornecedorForm.setValue({
                idFornecedor: this.fornecedor.idFornecedor,
                cpfCnpj: this.fornecedor.cpfCnpj,
                nome: this.fornecedor.nome,
                idEstado: this.fornecedor.idEstado,
               // estado: this.fornecedor.estado.nome,
           //         email: this.fornecedorModel.email,
          //     endereco: this.fornecedorModel.endereco,
          //       numero: this.fornecedorModel.numero,
          //   complemento: this.fornecedorModel.complemento,
          //       celular: this.fornecedorModel.celular,
          // dataCadastro: this.fornecedorModel.dataCadastro,
        })
      })
  }

  comparar(obj1, obj2){
    return obj1 && obj2 ? (obj1.nome && obj2.nome): obj1 === obj2 ;
  }

  teste(){
    console.log('passou aqui no teste')
  }


  voltarLista(): void {
    console.log('********voltarLista******')
    this.router.navigate(['/fornecedor/lista']);
  }

}
