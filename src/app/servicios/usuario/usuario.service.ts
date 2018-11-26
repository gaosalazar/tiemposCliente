import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Usuario } from 'src/app/clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  constructor(private api: ApiService) { }

  login(usuario: Usuario) {
    return this.api.post('login', usuario)
  }

  obtener(parametros){

    return this.api.get('usuario', parametros)
  }

  logout() {
    
    return this.api.delete('logout')
  }


  prueba(){
    return {nombre: 'gabo', casa: 'sdsdsd'}
  }
}
