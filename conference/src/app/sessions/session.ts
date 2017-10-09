export class Session{
    id: number;
    title: string;
    titleMobile: string;
    image: string;
    type: string;
    description: string;
    track: Track;
    category: string;
    language: string;
    tags: string[];
    complexity: string;
    speakers: number[];
}

export class Track{
    title: string;
}