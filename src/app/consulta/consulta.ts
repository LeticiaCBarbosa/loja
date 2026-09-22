import { Component, inject, signal } from '@angular/core';
import { LojaService } from '../loja-service';
import { CarrinhoService } from '../carrinho-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-consulta',
  imports: [],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})
export class ConsultaProdutos {
  readonly #lojaService = inject(LojaService)
  readonly #carrinhoService = inject(CarrinhoService)
  protected produtos = signal<Produto[] | undefined>(undefined)

  constructor() {
    this.consultarTodos()
  }

  consultarTodos() {
    this.#lojaService.obterTodos().subscribe(res => {
      this.produtos.set(res)
    })
  }

  adicionarAoCarrinho(produto: Produto) {
  this.#carrinhoService.adicionar({ id: produto.id, produto, quant: 1 })
  }

  aumentar(produtoId: number) {
    this.#carrinhoService.aumentar(produtoId)
  }

  diminuir(produtoId: number) {
    this.#carrinhoService.diminuir(produtoId)
  }

  retirar(produtoId: number) {
    this.#carrinhoService.retirar(produtoId)
  }
}
