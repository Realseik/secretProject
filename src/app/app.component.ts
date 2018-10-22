import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public version = '4';
  title = 'aplicaciones-pwa-realseik';
  constructor(private swUpdate: SwUpdate) { }

  ngOnInit() {
    this.observeForUpdates();
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

}
