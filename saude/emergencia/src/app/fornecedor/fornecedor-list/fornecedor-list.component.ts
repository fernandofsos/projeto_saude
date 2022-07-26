import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../model/fornecedor';
import { Subscription } from 'rxjs';
import { Page } from 'src/app/model/page';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {

  lstFornecedor: Fornecedor[] =[];
  fornecedor: Fornecedor = new Fornecedor();
  subscription: Subscription[] = []
  fornecedorSelecionado: Fornecedor;

  lstPages: Page[] = [];
  page = 4;

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {

    console.log('ngOnInit');
    this.getFornecedor();
  }

  getFornecedor(): void {
    this.subscription.push(
      this.fornecedorService.getListaClientes().subscribe(result =>{
        this.lstFornecedor = result
        console.log(this.lstFornecedor);
      })
    )
  }

  getPageFornecedor(): void {
    this.subscription.push(
      this.fornecedorService.pageFornecedor(0,10).subscribe(result =>{
        this.lstPages = result
        console.log(this.lstFornecedor);
      })
    )
  }

  preparaDesativacao(fornecedor: Fornecedor): void {
    console.log(fornecedor);

    // console.log("prepara delecao");
    // this.fornecedorSelecionado = fornecedor;
    // console.log(this.fornecedorSelecionado);
    // this.showModalConfirmaDesativar(`Deseja desativar ${this.fornecedorSelecionado.nome} ?`)
  }

  loadPage(page: number): void {
    console.log('passou aqui ' + page);
  }

}
