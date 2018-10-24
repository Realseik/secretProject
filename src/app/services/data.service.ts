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
    // switch (name) {
    //   case 'Estado':
    //     return this.getEstados();
    //   case 'Agencia':
    //     return this.getAgencias();
    //   case 'Tipo':
    //     return this.getTipos();
    // }
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
            return { name: lanzamiento.name, id: lanzamiento.id, fecha: lanzamiento.isostart, imagen: lanzamiento.rocket.imageURL };
          })
      )
    );
  }
  public cargarLanzamientos(): Observable<any> {
    return this.http.get(URL + '/assets/launchlibrary.json').pipe(
      map((res: any) =>
        res.launches
          .map(lanzamiento => {
            return { name: lanzamiento.name, id: lanzamiento.id, fecha: lanzamiento.isostart, imagen: lanzamiento.rocket.imageURL };
          })
      )
    );
  }

  // ---------   Filtros a aplicar en la lista de lanzamientos

  private filtrarAgencia(lanzamiento: any, valor: number): boolean {
    if (lanzamiento.lsp) {
      return lanzamiento.lsp.id === valor;
    }
  }

  private filtrarTipoMision(lanzamiento: any, valor: number): boolean {
    if (lanzamiento.missions.length > 0) {
      return lanzamiento.missions[0].type === valor;
    }
  }

  private filtrarEstado(lanzamiento: any, valor: number): boolean {
    return lanzamiento.status === valor;
  }

  private filtrarLanzamiento(lanzamiento: any, valor: number): boolean {
    return lanzamiento.id === valor;
  }

  // ---------   GETS

  private getAgencias() {
    return this.http.get(URL + '/assets/launchagencies.json').pipe(
      map((res: any) => {
        return res.agencies;
      })
    );
  }

  private getTipos() {
    return this.http.get(URL + '/assets/launchmissions.json').pipe(
      map((res: any) => {
        return res.types;
      })
    );
  }

  private getEstados() {
    return this.http.get(URL + '/assets/launchstatus.json').pipe(
      map((res: any) => {
        return res.types;
      })
    );
  }
}
