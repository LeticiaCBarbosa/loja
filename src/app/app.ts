import { Component, signal } from '@angular/core';
import { ConsultaProdutos } from "./consulta/consulta";
import { ExibirCarrinho } from './exibir-carrinho/exibir-carrinho';

@Component({
  selector: 'app-root',
  imports: [ConsultaProdutos, ExibirCarrinho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('loja');
}
