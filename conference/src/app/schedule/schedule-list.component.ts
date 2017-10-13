import { Component, OnInit } from '@angular/core';

import { Schedule } from './schedule'
import { ScheduleService } from './schedule.service'

@Component({
    selector: 'schedule-list',
    template: `
        <h2>SCHEDULE</h2>
        <ul>
            <li *ngFor="let sc of schedule">
                {{ sc.date }} : {{ sc.dateReadable }}
            </li>
        </ul>
    `
})

export class ScheduleListComponent implements OnInit {

    schedule: Schedule[] = []

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleService
            .getSchedule()
            .then(resp => this.schedule = resp)
    }
}