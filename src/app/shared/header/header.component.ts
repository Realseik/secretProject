import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public version = '4';
  public title = 'Proyecto final RealseiK';

  private valores$: Observable<any>;

  constructor(
    private swUpdate: SwUpdate,
    private store: Store<GlobalState>) { }

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

  // TODO: Llevar esto a un componente header
  observeLaunches = () => {
    this.valores$ = this.store.select('valores');
  }
}
