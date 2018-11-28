import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Usuario } from 'src/app/clases/usuario';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = { nombre: 'gabriel', password: '12345' }

  images = [
    '../assets/images/action-automotive-car-279949.jpg',
    '../assets/images/attractive-automobile-bag-1399282.jpg',
    '../assets/images/pexels-photo-97079.jpeg',

  ]

  constructor(private usuarioService: UsuarioService, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Eficar - Login')
  }

  ngOnInit() {
    this.titleService.setTitle('Eficar - Login')

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
