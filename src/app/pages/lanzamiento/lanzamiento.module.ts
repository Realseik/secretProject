import { ContainerLanzamientosComponent } from '../../containers/containerLanzamiento/containerLanzamiento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanzamientoRoutingModule } from './lanzamiento-routing.module';
import { LanzamientoComponent } from './lanzamiento.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LanzamientoEffects } from '../../reducers/lanzamiento/lanzamiento.effects';
import { reducer } from '../../reducers/valor.reducer';
import { DateFormatPipe } from '../../pipes/date.pipe';


@NgModule({
    imports: [
        CommonModule,
        LanzamientoRoutingModule,
        StoreModule.forFeature('lanzamientos', { lanzamiento: reducer }),
        EffectsModule.forFeature([LanzamientoEffects]),
    ],
    declarations: [DateFormatPipe, LanzamientoComponent, ContainerLanzamientosComponent]
})
export class LanzamientoModule { }

