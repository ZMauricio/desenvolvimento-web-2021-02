export class Produto {
  public id: number;
  public nome: string;
  public descricao: string;
  public valorCompra: number;
  public status: boolean;
  public imagem: string;

  constructor()
  constructor(id?: number, nome?: string, descricao?: string,
              valorCompra?: number, status?: boolean, imagem?: string) {

    this.id = id || 0;
    this.nome = nome || '';
    this.descricao = descricao || '';
    this.valorCompra = valorCompra || 0;
    this.status = status || false;
    this.imagem = imagem || '';
  }
}
