import { Injectable } from '@angular/core';

function getLocalStorage(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null;
  } catch {
    return null;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAutenticado(): boolean {
    const ls = getLocalStorage();
    return ls ? ls.getItem('autenticado') === 'true' : false;
  }

  login(usuario: string, senha: string): boolean {
    const ls = getLocalStorage();
    if (usuario === 'adm' && senha === '123') {
      ls?.setItem('autenticado', 'true');
      return true;
    }
    ls?.setItem('autenticado', 'false');
    return false;
  }

  logout() {
    const ls = getLocalStorage();
    ls?.setItem('autenticado', 'false');
  }
} 