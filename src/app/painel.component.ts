import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {
  usuario = '';
  senha = '';
  erro = '';

  // Injeta AuthService e Router
  constructor(private auth: AuthService, private router: Router) {}

  // Método chamado ao submeter o formulário
  onLogin() {
    if (this.auth.login(this.usuario, this.senha)) {
      // Aguarda o localStorage ser atualizado antes de navegar
      Promise.resolve().then(() => {
        this.router.navigate(['/painel-controle']);
      });
    } else {
      this.erro = 'Usuário ou senha inválidos!';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1500);
    }
  }
} 