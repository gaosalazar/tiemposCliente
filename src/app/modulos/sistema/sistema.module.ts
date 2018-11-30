import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaComponent } from './sistema.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { NgbCollapseModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SistemaComponent, NavbarComponent, MenuComponent],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTooltipModule
  ]
})
export class SistemaModule { }
