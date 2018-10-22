import { ValorEffects } from './reducers/valor.effects';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ValoresComponent } from './valores/valores.component';
import { ContainerBuscadorComponent } from './containers/containerBuscador/containerBuscador.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LanzamientosEffects } from './reducers/lanzamientos/lanzamientos.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LanzamientoComponent } from './lanzamiento/lanzamiento.component';
import { LanzamientoEffects } from './reducers/lanzamiento/lanzamiento.effects';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ValoresComponent,
    ContainerBuscadorComponent,
    LanzamientoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LanzamientosEffects, ValorEffects, LanzamientoEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
