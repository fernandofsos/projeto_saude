import { Cliente } from "./cliente";

export class ServicoPrestado {
  id: number;
  descricao: string;
  idCliente: Cliente;
  valor: number;
  dataCadastro: string;
}
