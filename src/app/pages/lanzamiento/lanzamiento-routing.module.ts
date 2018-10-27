import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerLanzamientosComponent } from '../../containers/containerLanzamiento/containerLanzamiento.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerLanzamientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanzamientoRoutingModule { }

