import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/reducers';
import { LoadLanzamientos } from '../../reducers/valor.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public version = '4';
  public title = 'Proyecto final RealseiK';
  private numLanzamientos: number;
  public valores$: Observable<any>;

  constructor(
    private swUpdate: SwUpdate,
    private store: Store<GlobalState>) { }

  ngOnInit() {
    this.loadData();
    this.observeForUpdates();
    this.observeLaunches();
  }

  loadData = () => {
    this.store.dispatch(new LoadLanzamientos());
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
    this.valores$ = this.store.select('valores');
  }

}
