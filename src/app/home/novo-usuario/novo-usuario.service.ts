import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor( private httpm: HttpClient ) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpm.post('http://localhost:3000/user/signup', novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.httpm.get(`http://localhost:3000/user/exits/${nomeUsuario}`)
  }
}
