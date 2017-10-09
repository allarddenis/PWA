import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Session } from './session'

@Injectable()
export class SessionService {

    constructor() {
    }

    fetchData(){
        fetch('/assets/sessions.json')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
    
}