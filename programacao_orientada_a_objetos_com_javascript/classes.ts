type Produto = {
    nome: string
    valor: number
}

/*class Estabelecimento{
  private endereco: string;
  private setor: string;
  private produtos: Produto[];
  constructor(endereco: string, setor: string, produtos: Produto[]){
    this.endereco = endereco;
    this.setor = setor;
    this.produtos = produtos; 
  }

}*/

class Estabelecimento {
  private _filaDeEspera = 10;

  constructor(
        public endereco: string,
        public setor: string,
        private produtos: Produto[],
        filadeEspera ?: number 
  ) {
    this.filaDeEspera = filadeEspera ?? this._filaDeEspera;
  }

  public retornaNomeDosProdutos(){
    return this.produtos.map(produto => produto.nome);
  }

  get filaDeEspera(){
    return this._filaDeEspera;

  }

  set filaDeEspera(fila: number){
    if (fila <= 0){
      return;
    }
    this._filaDeEspera = fila;

  }

  public diminuiFilaDeEspera(){
    if(this._filaDeEspera === 0){
      return;
    }
    this._filaDeEspera -=1;
  }

}



const padaria = new Estabelecimento(
  "Rua das Laranjas, 1254 - bloco C",
  "Alimentação",
  [
    {nome: "pão", valor: 0.8},
    {nome: "brigadeiro", valor: 1.0},
    {nome: "arroz", valor: 10},
    {nome: "farinha", valor: 5.5},
  ],
  -12
);

padaria.diminuiFilaDeEspera();
padaria.filaDeEspera = -1;
console.log(padaria);