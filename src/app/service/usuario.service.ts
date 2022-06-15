import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  getByEmail(email: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/email/${email}`, this.token)
  }

  getByNome(nome: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/nome/${nome}`, this.token)
  }

  getByCurso(email: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/curso/${email}`, this.token)
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`http://localhost:8080/usuarios/all`, this.token)
  }

  postEntrar(usuarioLogin:UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar',usuarioLogin)
  }

  postCadastrar(user:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',user)
  }

  putEditar(user: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuarios/editar', user, this.token)
  }

  logado(){
    let ok: boolean=false
    if(environment.token != ''){
      ok=true
    }
    console.log(environment.token)
    return ok
  }
}
