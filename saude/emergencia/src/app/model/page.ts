import { Fornecedor } from "../fornecedor/model/fornecedor";

export class Page {

  content: Array<Fornecedor>;
  totalPages: number;
  tootalElementos: number;
  last: number;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;

}
