import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalState } from '../reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {

  @Input()
  public lanzamiento: any[];
  public lanzamiento$: Observable<any>;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.lanzamiento = [];
    this.observeLaunches();
  }

  observeLaunches = () => {
    this.lanzamiento$ = this.store.select('lanzamiento').pipe(
      map(stateLanzamiento => {
        return stateLanzamiento.data;
      })
    );
  }
}
