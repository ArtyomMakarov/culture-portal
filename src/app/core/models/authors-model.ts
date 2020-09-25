export interface IAuthor {
  name: string;
  liveTime: string;
  photo: string;
  biography: string;
  timeline: Timeline[];
  works: Works[];
  galery: Galery[];
  youtube: string;
  activity: Activity[];
}

export interface Timeline {
  date: string;
  description: string;
}

interface Works {
  date: string;
  work: string;
}

interface Galery {
  photo: string;
}

interface Activity {
  lat: string;
  lon: string;
}
