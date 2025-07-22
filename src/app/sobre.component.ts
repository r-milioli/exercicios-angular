import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit, OnDestroy {
  // Array de ícones SVG como strings
  icones = [
    `<svg width="100" height="100" viewBox="0 0 24 24" fill="#007bff"><circle cx="12" cy="12" r="10"/></svg>`,
    `<svg width="100" height="100" viewBox="0 0 24 24" fill="#e4405f"><rect x="4" y="4" width="16" height="16" rx="4"/></svg>`,
    `<svg width="100" height="100" viewBox="0 0 24 24" fill="#0a66c2"><polygon points="12,2 22,22 2,22"/></svg>`
  ];
  indiceAtual = 0;
  intervalo: any;

  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.indiceAtual = (this.indiceAtual + 1) % this.icones.length;
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
} 