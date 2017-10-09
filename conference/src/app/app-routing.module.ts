import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SessionListComponent } from './sessions/session-list.component'
import { SessionDetailsComponent } from './sessions/session-details.component'
 
const routes: Routes = [
  { path: '', redirectTo: '/sessions', pathMatch: 'full' },
  { path: 'sessions',  component: SessionListComponent },
  { path: 'session/:id', component: SessionDetailsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}