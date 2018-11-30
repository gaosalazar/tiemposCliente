import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Usuario } from 'src/app/clases/usuario';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { NotificacionService } from 'src/app/servicios/notificacion/notificacion.service';
import { Empresa } from 'src/app/clases/empresa';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = { nombre: 'gabriel', password: '12345' }
  empresas: Usuario["empresas"][] = []
  empresa_seleccionada: any

  formulario = new FormGroup({
    nombre: new FormControl('gabriel'),
    password: new FormControl('12345'),
  });

  images = [
    '../assets/images/action-automotive-car-279949.jpg',
    '../assets/images/attractive-automobile-bag-1399282.jpg',
    '../assets/images/pexels-photo-97079.jpeg',

  ]

  constructor(
    private usuarioService: UsuarioService, 
    private titleService: Title, 
    private meta: Meta,
    private notificacion: NotificacionService,
    private route: Router
    ) {
    this.titleService.setTitle('Eficar - Login')
  }

  ngOnInit() {
    this.titleService.setTitle('Eficar - Login')

  }

  iniciarSesion() {
    this.usuarioService.login(this.formulario.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
   
    this.empresas = res.usuario.empresas
   
    }, error => {
      this.notificacion.mostrarMensaje('error', 'Inicio de sesión', 'Usuario o contraseña incorrectos')
    })
  }

  seleccionarEmpresa(){
    localStorage.setItem('empresa', this.empresa_seleccionada)
    this.route.navigate(['/sistema'])
    this.notificacion.mostrarMensaje('info', 'Inicio de sesión', 'Bienvenido '+ this.formulario.value.nombre)
 
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
