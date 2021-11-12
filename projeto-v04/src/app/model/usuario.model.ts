export class Usuario {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public idade: number;
  public cidade: string;

  constructor()
  constructor(id?: number, nome?: string, email?: string,
              senha?: string, idade?: number, cidade?: string) {

    this.id = (id)? id : 0;
    this.nome = (nome)? nome : '';
    this.email = (email)? email : '';
    this.senha = (senha)? senha : '';
    this.idade = (idade)? idade : 0;
    this.cidade = (cidade)? cidade : '';
  }
}
