import { Component, OnInit } from '@angular/core';

// ROUTING
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

// SCHEDULE
import { Schedule } from './schedule'
import { ScheduleService } from './schedule.service'

@Component({
    selector: 'schedule-details',
    template: `
        <h2 *ngIf='schedule'> {{schedule.date}} : {{schedule.dateReadable}} </h2>
    `
})

export class ScheduleDetailsComponent implements OnInit {

    schedule: Schedule;

    constructor(private route: ActivatedRoute, private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.scheduleService.getUniqueSchedule(params.get('date')))
            .subscribe(schedule => this.schedule = schedule)
    }
}