import { Component, signal } from '@angular/core';
import { ConsultaProdutos } from "./consulta/consulta";

@Component({
  selector: 'app-root',
  imports: [ConsultaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('loja');
}
