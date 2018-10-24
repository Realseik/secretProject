import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalState } from './reducers';
import { map } from 'rxjs/operators';
import { ValoresState } from './reducers/valor.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public version = '4';
  title = 'aplicaciones-pwa-realseik';
  private numeroLanzamientos$: Observable<any>;
  public numeroLanzamientos: number;
  private nombreLanzamiento$: Observable<any>;
  public nombreLanzamiento: string;

  constructor(private swUpdate: SwUpdate, private store: Store<GlobalState>) { }

  ngOnInit() {
    this.observeForUpdates();
    this.observeLaunches();
  }

  observeForUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        if (confirm('Nueva versión disponible')) {
          window.location.reload();
        }
      });
    }
  }
  observeLaunches = () => {

    this.numeroLanzamientos$ = this.store.select('numeroLanzamientos').pipe(
      map((state: ValoresState) => {
        this.numeroLanzamientos = state.numeroLanzamientos;
      })
    );

    this.nombreLanzamiento$ = this.store.select('nombreLanzamiento').pipe(
      map((state: ValoresState) => {
        this.nombreLanzamiento = state.nombreLanzamiento;
      })
    );

    // this.store.dispatch(new LoadLanzamientos(valorCriterio));

  }

}
