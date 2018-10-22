import { ContainerLanzamientosComponent } from '../containers/containerLanzamiento/containerLanzamiento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanzamientoRoutingModule } from './lanzamiento-routing.module';
import { LanzamientoComponent } from './lanzamiento.component';


@NgModule({
    imports: [
        CommonModule,
        LanzamientoRoutingModule
    ],
    declarations: [LanzamientoComponent, ContainerLanzamientosComponent]
})
export class LanzamientosModule { }

