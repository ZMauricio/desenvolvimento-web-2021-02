export class Produto {
  public id: number;
  public nome: string;
  public valorVenda: number;
  public status: boolean;
  public descricao: string;
  public imagem: string;


  constructor()
  constructor(id?: number, nome?: string,
              valorVenda?: number, status?: boolean,
              descricao?: string, imagem?: string) {

    this.id = (id)? id : null;
    this.nome = (nome)? nome: '';
    this.valorVenda = (valorVenda)? valorVenda : 0;
    this.status = (status != null && status !=undefined)? status : false;
    this.descricao = (descricao)? descricao: '';
    this.imagem = (imagem)? imagem: '';
  }
}
