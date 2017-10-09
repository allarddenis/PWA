import { Component, OnInit } from '@angular/core';

import { Session } from './session'
import { SessionService} from './session.service'

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
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