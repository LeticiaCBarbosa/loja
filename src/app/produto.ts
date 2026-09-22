export type Produto = {
   id: number,
   nome: string,
   marca: string,
   descricao: string,
   preco: number,
   foto: string,
   quantidade: number
}

export type Itens ={
    id: number,
    produto: Produto,
    quant: number
}
