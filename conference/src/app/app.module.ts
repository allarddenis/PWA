import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule }     from './app-routing.module';

// SESSIONS
import { SessionListComponent } from './sessions/session-list.component'
import { SessionDetailsComponent } from './sessions/session-details.component'
import { SessionService } from './sessions/session.service'

// SCHEDULE
import { ScheduleListComponent } from './schedule/schedule-list.component'
import { ScheduleDetailsComponent } from './schedule/schedule-details.component'
import { ScheduleService } from './schedule/schedule.service'

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent, SessionDetailsComponent,
    ScheduleListComponent, ScheduleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SessionService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
