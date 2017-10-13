import { Component, OnInit } from '@angular/core';

import { Session } from './session'
import { SessionService } from './session.service'

@Component({
    selector: 'session-list',
    template: `
        <h2>SESSIONS</h2>
        <ul>
            <li *ngFor="let session of sessions">
                {{ session.id }} : {{ session.title }}
            </li>
        </ul>
    `
})

export class SessionListComponent implements OnInit {

    sessions: Session[] = [];

    constructor(sessionService: SessionService) {
        sessionService.getSessions()
            .then(sessions => {
                this.sessions = sessions
            })
    }

    ngOnInit() { }
}