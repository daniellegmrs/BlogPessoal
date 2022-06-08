import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../Model/Usuario';
import { UsuarioLogin } from '../Model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://dnllgmrsblog.herokuapp.com/usuarios/logar', usuarioLogin)
}

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://dnllgmrsblog.herokuapp.com/usuarios/cadastrar', usuario)
}

logado(){
  let ok: boolean = false

  if(environment.token != ''){
    ok = true
  }

  return ok 
}

}


