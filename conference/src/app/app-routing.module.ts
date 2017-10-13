import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
// SESSIONS
import { SessionListComponent } from './sessions/session-list.component'
import { SessionDetailsComponent } from './sessions/session-details.component'

// SCHEDULE
import { ScheduleListComponent } from './schedule/schedule-list.component'
 
const routes: Routes = [
  { path: 'sessions',  component: SessionListComponent },
  { path: 'sessions/:id', component: SessionDetailsComponent },
  { path: 'schedule',  component: ScheduleListComponent },
  { path: '', redirectTo: '/sessions', pathMatch: 'full' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}