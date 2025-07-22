import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./servicos.component').then(m => m.ServicosComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./contato.component').then(m => m.ContatoComponent)
  },
  {
    path: 'painel',
    loadComponent: () => import('./painel.component').then(m => m.PainelComponent)
  },
  {
    path: 'painel-controle',
    loadComponent: () => import('./painel-controle.component').then(m => m.PainelControleComponent),
    canActivate: [authGuard]
  }
];
// Rotas /painel (login) e /painel-controle (restrita) adicionadas.
