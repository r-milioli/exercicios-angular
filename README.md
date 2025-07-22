# Exercicio-Contínuo Angular

Projeto desenvolvido como exercício prático para disciplina/treinamento em Angular, com foco em boas práticas, simplicidade e experiência do usuário.

## ✨ Visão Geral

Este sistema simula um site institucional moderno, com navegação entre páginas, autenticação, área administrativa e um formulário de contato validado. O layout é responsivo, elegante e utiliza componentes standalone do Angular.

### Funcionalidades Principais

- **Página Inicial:** Destaque de produtos em cards.
- **Sobre:** Apresentação institucional da empresa, com carrossel de ícones.
- **Serviços:** Lista dos principais serviços oferecidos.
- **Contato:** Formulário reativo com validação robusta e feedback visual.
- **Painel Administrativo:** Área restrita acessível apenas por autenticação.
- **Rodapé:** Informações institucionais e links para redes sociais.

## 🚀 Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
3. Acesse no navegador: [http://localhost:4200](http://localhost:4200)

## 🗺️ Estrutura de Navegação

- `/` — Página Inicial
- `/sobre` — Sobre a empresa
- `/servicos` — Serviços oferecidos
- `/contato` — Formulário de contato
- `/painel` — Login (acesso restrito)
- `/painel-controle` — Painel administrativo (restrito)

## 📝 Detalhes do Formulário de Contato

- **Tecnologia:** Formulário reativo (ReactiveFormsModule)
- **Campos:**
  - Nome (obrigatório)
  - Email (obrigatório e formato válido)
  - Mensagem (obrigatório, mínimo 10 caracteres)
- **Validação:** Mensagens de erro exibidas apenas quando o campo é tocado e inválido.
- **Envio:** Alerta de sucesso, dados exibidos no console e formulário limpo. Alerta de erro se houver campos inválidos.
- **Layout:** CSS externo, responsivo e amigável.

## 🎨 Visual

- **Layout moderno:** Menu fixo, conteúdo centralizado, rodapé elegante.
- **Responsividade:** Layout adaptado para dispositivos móveis.
- **Feedback visual:** Erros de validação destacados em vermelho, botões com efeito hover.

## 💡 Destaques Técnicos

- Angular Standalone Components
- Reactive Forms com validação
- Navegação por rotas
- CSS modularizado e responsivo
- Código comentado e organizado

## 📁 Estrutura de Pastas

```
src/app/
  app.component.*         # Layout principal e navegação
  home.component.*        # Página inicial
  sobre.component.*       # Sobre a empresa
  servicos.component.*    # Serviços
  contato.component.*     # Formulário de contato
  painel.component.*      # Login
  painel-controle.component.* # Área restrita
  rodape.component.html/css   # HTML/CSS do rodapé
```

## 👨‍💻 Autor

Desenvolvido por Robson Milioli para fins educacionais.