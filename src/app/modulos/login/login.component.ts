import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = { nombre: 'gabriel', password: '12345' }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {


  }

  iniciarSesion() {
    this.usuarioService.login(this.usuario).subscribe((res: any) => {
      localStorage.setItem('token', res)

    }, error => {
      console.log('yahora')
      console.log(error)
    })
  }

  cerrarSesion() {
    this.usuarioService.logout().subscribe(res => {
      console.log(res)
    }, error => {
      console.log('yahora')
      console.log(error)
    })
  }

  obtener() {
    this.usuarioService.obtener({
      nombre: 'gabriel'
    }).subscribe(res => {
      console.log(res)
    }, error => {

    })
  }



}
