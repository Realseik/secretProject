import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContainerListaLanzamientosComponent } from '../../containers/containerListaLanzamientos/containerListaLanzamientos.component';
import { ListaLanzamientosRoutingModule } from './listaLanzamientos-routing.module';
import { ListaLanzamientosComponent } from './listaLanzamientos.component';
import { reducer } from '../../reducers/valor.reducer';

@NgModule({
  imports: [
    CommonModule,
    ListaLanzamientosRoutingModule,
    StoreModule.forFeature('lanzamientos', { lanzamientos: reducer }),
    EffectsModule.forFeature([]),
  ],
  declarations: [ListaLanzamientosComponent, ContainerListaLanzamientosComponent]
})
export class ListaLanzamientosModule { }

