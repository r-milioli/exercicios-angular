import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContatoComponent {
  // Formulário reativo do Angular
  contatoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa o formulário com validações
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Função chamada ao submeter o formulário
  onSubmit() {
    if (this.contatoForm.valid) {
      // Exibe alerta de sucesso
      alert('Mensagem enviada com sucesso!');
      // Exibe os dados no console
      console.log(this.contatoForm.value);
      // Limpa o formulário
      this.contatoForm.reset();
    } else {
      // Exibe alerta de erro se houver campos inválidos
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
} 