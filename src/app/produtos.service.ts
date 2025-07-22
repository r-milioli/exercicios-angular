import { Injectable } from '@angular/core';

// Interface para tipar os produtos
export interface Produto {
  foto: string;    // Caminho da imagem
  rotulo: string;  // Nome do produto
  detalhe: string; // Descrição do produto
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // Array de produtos simulando uma fonte de dados
  private produtos: Produto[] = [
    {
      foto: 'assets/img/produto1.jpg',
      rotulo: 'Produto 1',
      detalhe: 'Descrição do Produto 1.'
    },
    {
      foto: 'assets/img/produto2.jpg',
      rotulo: 'Produto 2',
      detalhe: 'Descrição do Produto 2.'
    },
    {
      foto: 'assets/img/produto3.jpg',
      rotulo: 'Produto 3',
      detalhe: 'Descrição do Produto 3.'
    },
    {
      foto: 'assets/img/produto4.jpg',
      rotulo: 'Produto 4',
      detalhe: 'Descrição do Produto 4.'
    },
    {
      foto: 'assets/img/produto5.jpg',
      rotulo: 'Produto 5',
      detalhe: 'Descrição do Produto 5.'
    },
    {
      foto: 'assets/img/produto6.jpg',
      rotulo: 'Produto 6',
      detalhe: 'Descrição do Produto 6.'
    }
  ];

  // Método para obter os produtos
  getProdutos(): Produto[] {
    return this.produtos;
  }
} 