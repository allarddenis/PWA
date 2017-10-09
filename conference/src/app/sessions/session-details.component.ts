import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Session } from './session'
import { SessionService } from './session.service'

@Component({
    selector: 'session-details',
    template: `
    <h1 *ngIf='session'> {{session.id}} : {{session.title}} </h1>
    `
})

export class SessionDetailsComponent implements OnInit {

    session: Session;

    constructor(private route: ActivatedRoute, private sessionService: SessionService) {
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.sessionService.getSession(parseInt(params.get('id'), 10)))
            .subscribe(session => this.session = session);
    }
}