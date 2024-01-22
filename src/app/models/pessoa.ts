export interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  data_nascimento: Date;
  contatos: [id: number, nome: string, telefone: string, email: string];
}
