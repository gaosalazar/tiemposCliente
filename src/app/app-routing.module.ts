import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', loadChildren: './modulos/inicio/inicio.module#InicioModule' },
  { path: 'login', loadChildren: './modulos/login/login.module#LoginModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
