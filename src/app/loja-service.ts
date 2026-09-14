import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Service()
export class LojaService {
    readonly API = 'http://localhost:3000'
    readonly #http = inject(HttpClient)

    obterTodos(): Observable<Produto[]> {
        return this.#http.get<Produto[]>(
            `${this.API}/produtos`) 
    }
}
