import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL } from '../shared/config';
import { Store } from '@ngrx/store';
import { GlobalState } from '../reducers';
import { of, Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private store: Store<GlobalState>) { }

  // ---------    Funciones generales

  public leerCriterios() {
    // Como tenemos unos valores fijos pero podrian cambiar,
    // prefiero probar a mandarlos forzando un observable en vez de estar en el InitialState
    // de criterio.reducer.ts y de paso aprendo a usar el of.
    return of(['Estado', 'Agencia', 'Tipo']);
  }

  public leerValoresCriterio(): Observable<any> {
    return this.getEstados();
  }

  public leerLanzamiento(valor): Observable<any> {
    return this.http.get(URL + '/assets/launchlibrary.json').pipe(
      map((res: any) =>
        res.launches
          .filter(launch => {
            return this.filtrarLanzamiento(launch, Number(valor));
          })
          .map(lanzamiento => {
            return lanzamiento;
          })
      )
    );
  }

  public leerLanzamientos(valor): Observable<any> {
    return this.http.get(URL + '/assets/launchlibrary.json').pipe(
      map((res: any) =>
        res.launches
          .filter(launch => {
            return this.filtrarEstado(launch, Number(valor));
          })
          .map(lanzamiento => {
            return {
              name: lanzamiento.name,
              id: lanzamiento.id,
              fecha: lanzamiento.isostart,
              imagen: lanzamiento.rocket.imageURL ? lanzamiento.rocket.imageURL  : undefined,
              failreason: lanzamiento.failreason,
              mapURL: lanzamiento.location.pads[0].mapURL
            };
          })
      )
    );
  }
  public cargarLanzamientos(): Observable<any> {
    return this.http.get(URL + '/assets/launchlibrary.json').pipe(
      map((res: any) =>
        res.launches
          .map(lanzamiento => {
            return {
              name: lanzamiento.name,
              id: lanzamiento.id,
              fecha: lanzamiento.isostart,
              imagen: lanzamiento.rocket.imageURL ? lanzamiento.rocket.imageURL  : undefined,
              failreason: lanzamiento.failreason,
              mapURL: lanzamiento.location.pads[0].mapURL
            };
          })
      )
    );
  }

  // ---------   Filtros a aplicar en la lista de lanzamientos
  private filtrarEstado(lanzamiento: any, valor: number): boolean {
    return lanzamiento.status === valor;
  }

  private filtrarLanzamiento(lanzamiento: any, valor: number): boolean {
    return lanzamiento.id === valor;
  }

  // ---------   GETS
  private getEstados() {
    return this.http.get(URL + '/assets/launchstatus.json').pipe(
      map((res: any) => {
        return res.types;
      })
    );
  }
}
