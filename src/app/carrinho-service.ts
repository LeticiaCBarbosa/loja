import { Service, Signal, signal } from '@angular/core';
import { Itens } from './produto';

@Service()
export class CarrinhoService {
    protected produtos = signal<Itens[] | undefined>(undefined);
    protected numeroDeProdutos = signal<number>(0);
    protected total = signal<number>(0);

    contarProdutos() {
        const atual = this.produtos();
        if (atual) {
            this.numeroDeProdutos.set(atual.length);
        } else {
            this.numeroDeProdutos.set(0);
        }
    }

    obterNumeroDeProdutos(): Signal<number> {
        return this.numeroDeProdutos;
    }

    adicionar(item: Itens) {
        const atual = this.produtos();
        if (atual) {
            this.produtos.set([...atual, item]);
        } else {
            this.produtos.set([item]);
        }
        this.contarProdutos();
        this.atualizarTotal();
    }

    aumentar(id: number) {
        const atual = this.produtos();
        if (atual) {
            const novaLista = atual.map((item: Itens) => {
                if (item.id === id) {
                    return { ...item, quant: item.quant + 1 };
                }
                return item;
            });
            this.produtos.set(novaLista);
            this.atualizarTotal();
            this.contarProdutos();
        }
    }

    diminuir(id: number) {
        const atual = this.produtos();
        if (atual) {
            const novaLista = atual.map((item: Itens) => {
                if (item.id === id && item.quant > 1) {
                    return { ...item, quant: item.quant - 1 };
                }
                return item;
            });
            this.produtos.set(novaLista);
            this.atualizarTotal();
            this.contarProdutos();
        }
    }

    retirar(id: number) {
        const atual = this.produtos();
        if (atual) {
            const novaLista = atual.filter((item: Itens) => item.id !== id);
            this.produtos.set(novaLista);
            this.atualizarTotal();
            this.contarProdutos();
        }
    }

    obterProdutos(): Signal<Itens[] | undefined> {
        return this.produtos;
    }

    calcularTotal(): number {
        const atual = this.produtos();

        if (atual) {
            const total = atual.reduce((soma: number, item: Itens) => {
                return soma + item.produto.preco * item.quant;
            }, 0);
            return total;
        }

        return 0;
    }

    atualizarTotal() {
        const total = this.calcularTotal();
        this.total.set(total);
    }

    obterTotalSinal() {
        return this.total;
    }
}