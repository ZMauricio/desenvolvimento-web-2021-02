export class Cliente {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public rua: string;
  public numero: number;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public cep: string;

  constructor()
  constructor(id?: number, nome?: string, email?: string, senha?: string, rua?: string,
              numero?: number, bairro?: string, cidade?: string, estado?: string, cep?: string) {
    this.id = (id)? id : 0;
    this.nome = (nome)? nome: '';
    this.email = (email)? email: '';
    this.senha = (senha)? senha: '';
    this.rua = (rua)? rua: '';
    this.numero = (numero)? numero: 0;
    this.bairro = (bairro)? bairro: '';
    this.cidade = (cidade)? cidade: '';
    this.estado = (estado)? estado: '';
    this.cep = (cep)? cep: '';
  }
}
