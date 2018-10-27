import { Component, OnInit, Input } from '@angular/core';
import { DateFormatPipe } from '../../pipes/date.pipe';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css'],
  providers: [DateFormatPipe]
})
export class LanzamientoComponent implements OnInit {

  @Input()
  public lanzamiento: any[];

  constructor() { }

  ngOnInit() {
    this.lanzamiento = [];
  }

}
