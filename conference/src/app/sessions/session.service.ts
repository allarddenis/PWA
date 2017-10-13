import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Session } from './session'

@Injectable()
export class SessionService {

    jsonUrl: string = 'https://raw.githubusercontent.com/DevInstitut/conference-data/master/sessions.json';

    constructor() { }

    getSessions(): Promise<Session[]> {
        return fetch(this.jsonUrl)
            .then(resp => resp.json())
            .then(sessions =>
                Object.keys(sessions).map((k) => sessions[k])
            )
    }

    getSession(id: number) : Promise<Session>{
        console.log(id, 'GETTING SESSIONS')
        return this.getSessions()
        .then(
            sessions => {
                var session = sessions.filter(se => se.id === id)[0];
                console.log(session, "GOT SESSION")
                return session
            }
        )
    }
}