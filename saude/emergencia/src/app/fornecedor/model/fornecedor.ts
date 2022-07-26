import { Estado } from "src/app/model/estado";


export class Fornecedor {
  idFornecedor?: number;
  nome?: string;
  cpfCnpj?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  email?: string;
  celular?: string;
  dataCadastro?: string;
  idEstado?: number;
  estado?: Estado = new Estado();
}
