import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {

  @Input()
  public lanzamiento: any[];

  constructor() { }

  ngOnInit() {
    this.lanzamiento = [];
  }

}
