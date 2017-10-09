import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule }     from './app-routing.module';

// SESSIONS
import { SessionListComponent } from './sessions/session-list.component'
import { SessionDetailsComponent } from './sessions/session-details.component'

import { SessionService } from './sessions/session.service'

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent,
    SessionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
