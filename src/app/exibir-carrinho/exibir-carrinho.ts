import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  selector: 'app-exibir-carrinho',
  imports: [],
  templateUrl: './exibir-carrinho.html',
  styleUrl: './exibir-carrinho.scss',
})
export class ExibirCarrinho {
  readonly #carrinhoService = inject(CarrinhoService);
  protected carrinho = this.#carrinhoService.obterProdutos();
  protected total = this.#carrinhoService.calcularTotal();
  protected numeroDeProdutos = this.#carrinhoService.obterNumeroDeProdutos();

aumentar(produtoId: number) {
    this.#carrinhoService.aumentar(produtoId);
}

diminuir(produtoId: number) {
    this.#carrinhoService.diminuir(produtoId);
}

retirar(produtoId: number) {
    this.#carrinhoService.retirar(produtoId);
}

obterProdutos() {
    return this.#carrinhoService.obterProdutos();
}

calcularTotal() {
    return this.#carrinhoService.calcularTotal();
} 

}
