import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './listaLanzamientos.component.html',
  styleUrls: ['./listaLanzamientos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaLanzamientosComponent implements OnInit {
    public contadorLanzamientos: number;

  @Input()
  public lanzamientos: any[];
  @Output()
  lanzamientoSeleccionado = new EventEmitter<string>();
  @Output()
  cambiarOrden = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.lanzamientos = [];
  }

  Ordenar(tipo: string) {
    // let tipoOrden: tipoOrdenacion;
    // if (tipo === 'ASC') {
    //   tipoOrden = tipoOrdenacion.Ascendente;
    // } else {
    //   tipoOrden = tipoOrdenacion.Descendiente;
    // }
    this.cambiarOrden.emit(tipo);
  }

}
