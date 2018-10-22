import { ContainerListaLanzamientosComponent } from './../containers/containerListaLanzamientos/containerListaLanzamientos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContainerListaLanzamientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaLanzamientosRoutingModule { }

