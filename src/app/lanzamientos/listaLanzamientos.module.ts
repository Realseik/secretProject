import { ContainerListaLanzamientosComponent } from '../containers/containerListaLanzamientos/containerListaLanzamientos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaLanzamientosRoutingModule } from './listaLanzamientos-routing.module';
import { ListaLanzamientosComponent } from './listaLanzamientos.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { EffectsModule } from '@ngrx/effects';
import { LanzamientosEffects } from '../reducers/lanzamientos/lanzamientos.effects';
import { reducer } from '../reducers/valor.reducer';

@NgModule({
  imports: [
    CommonModule,
    ListaLanzamientosRoutingModule,
    StoreModule.forFeature('lanzamientos', { lanzamientos: reducer }),
    EffectsModule.forFeature([LanzamientosEffects]),
  ],
  declarations: [ListaLanzamientosComponent, ContainerListaLanzamientosComponent]
})
export class ListaLanzamientosModule { }

