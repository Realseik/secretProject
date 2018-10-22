import { ContainerListaLanzamientosComponent } from '../containers/containerListaLanzamientos/containerListaLanzamientos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaLanzamientosRoutingModule } from './listaLanzamientos-routing.module';
import { ListaLanzamientosComponent } from './listaLanzamientos.component';

@NgModule({
  imports: [
    CommonModule,
    ListaLanzamientosRoutingModule
  ],
  declarations: [ListaLanzamientosComponent, ContainerListaLanzamientosComponent]
})
export class ListaLanzamientosModule { }

