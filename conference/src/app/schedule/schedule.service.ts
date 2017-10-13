import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Schedule } from './schedule'

@Injectable()
export class ScheduleService {

    jsonUrl: string = 'https://raw.githubusercontent.com/DevInstitut/conference-data/master/schedule.json';

    constructor() { }

    getSchedule(): Promise<Schedule[]> {
        return fetch(this.jsonUrl)
            .then(resp => resp.json())
    }

    getUniqueSchedule(date: string) : Promise<Schedule>{
        console.log(date, 'GETTING SCHEDULE')
        return this.getSchedule()
        .then(
            schedule => {
                var uniqueSchedule = schedule.filter(sc => sc.date.toDateString() === date)[0];
                console.log(uniqueSchedule, "GOT SCHEDULE")
                return uniqueSchedule
            }
        )
    }
}