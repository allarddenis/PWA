import { Social } from '../shared/social'

export class Team{
    title: string;
    members: Member[];
}

export class Member{
    name: string;
    aka: string;
    photoUrl: string;
    socials: Social[];
}