import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// SESSIONS
import { SessionListComponent } from './sessions/session-list.component'
import { SessionService } from './sessions/session.service'

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
