import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuscadorComponent implements OnInit {

  @Input() public valoresCriterio = [];

  @Output() public valorSeleccionado = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onValorSeleccionado(evt) {
    this.valorSeleccionado.emit(evt);
  }
}
