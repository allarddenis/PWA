import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Session } from './session'

import * as localForage from "localforage";

@Injectable()
export class SessionService {

    constructor() {
    }

    fetchData(): Promise<any> {
        return fetch('https://raw.githubusercontent.com/DevInstitut/conference-data/master/sessions.json')
            .then(resp => resp.json())
    }

}