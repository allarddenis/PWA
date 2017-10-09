export class Schedule{
    date: Date;
    dateReadable: string;
    tracks: Track[];
    timeslots: Timeslot[];
}

export class Track{
    title: string;
}

export class Timeslot{
    startTime: string;
    endTime: string;
    sessions: number[];
}