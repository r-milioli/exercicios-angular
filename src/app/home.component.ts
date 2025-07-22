import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para diretivas como *ngFor
import { ProdutosService, Produto } from './produtos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Adiciona CommonModule para habilitar *ngFor
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produtos: Produto[] = [];

  // Injeta o service e carrega os produtos ao criar o componente
  constructor(private produtosService: ProdutosService) {
    this.produtos = this.produtosService.getProdutos();
  }
} 