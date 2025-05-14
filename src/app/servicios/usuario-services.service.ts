import { inject, Injectable } from '@angular/core';
import { UsuarioDto } from '../modelos/usuario.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicesService {

  private url = "http://localhost:8080/api"

  private http = inject(HttpClient);

  constructor() { }

  enviarFormulario(usuario:UsuarioDto): Observable<any>{
    let getUrl:string = this.url+'/guardar'
    return this.http.post<UsuarioDto>(getUrl,usuario);
  }

  recuperarUsuarios(): Observable<any>{
    let getUrl:string = this.url+'/recuperarTodo';
    return this.http.get<UsuarioDto[]>(getUrl);
  }

}
