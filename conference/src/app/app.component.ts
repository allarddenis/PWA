import { Component } from '@angular/core';

import { SessionListComponent } from './sessions/session-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    if (!('serviceWorker' in navigator)) {
      console.log('Service worker non supporté'); return;
    }
    navigator.serviceWorker.register('sw.js')
      .then(() => {
        console.log('Enregistrement OK');
      })
      .catch(error => {
        console.log('Enregistrement KO :', error);
    });

  }
}