export interface IAuthor {
  name: string;
  liveTime: string;
  photo: string;
  biography: Biography[];
  works: Works[];
  galery: Galery[];
  youtube: string;
  activity: Activity[];
}

interface Biography {
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
