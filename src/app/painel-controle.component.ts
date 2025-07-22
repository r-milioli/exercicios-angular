import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-painel-controle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-controle.component.html',
  styleUrl: './painel-controle.component.css'
})
export class PainelControleComponent {
  // Injeta AuthService e Router
  constructor(private auth: AuthService, private router: Router) {}

  // Método para sair do painel
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
} 