import { Social } from '../shared/social'

export class Speaker{
    id: number;
    name: string;
    company: string;
    companyLogo: string;
    country: string;
    photoUrl: string;
    shortBio: string;
    bio: string;
    tags: string[];
    badges: Badge[];
    socials: Social[];
}

export class Badge{
    name: string;
    description: string;
}