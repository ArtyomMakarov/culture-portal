export interface ITeammate {
  name: string;
  surname: string;
  city: string;
  country: string;
  photoName: string;
  age: number;
}

export const TEAMMATES: ITeammate[] = [
  {
    name: 'Pavel',
    surname: 'Saikov',
    city: 'Minsk',
    country: 'Belarus',
    age: 20,
    photoName: 'pavel-saikov',
  },
  {
    name: 'Nikita',
    surname: 'Belykov',
    city: 'Moscow',
    country: 'Russia',
    age: 20,
    photoName: 'nikita-belykov',
  },
  {
    name: 'Pavel',
    surname: 'Saikov',
    city: 'Minsk',
    country: 'Belarus',
    age: 20,
    photoName: 'pavel-saikov',
  },
  {
    name: 'Nikita',
    surname: 'Belykov',
    city: 'Moscow',
    country: 'Russia',
    age: 20,
    photoName: 'nikita-belykov',
  },
  {
    name: 'Pavel',
    surname: 'Saikov',
    city: 'Minsk',
    country: 'Belarus',
    age: 20,
    photoName: 'pavel-saikov',
  },
  {
    name: 'Nikita',
    surname: 'Belykov',
    city: 'Moscow',
    country: 'Russia',
    age: 20,
    photoName: 'nikita-belykov',
  },
];

export interface IWorklogItem {
  hours: number;
  description: string;
}

export interface ITeammateWorkLog {
  teammateName: string;
  worklogItems: IWorklogItem[];
}

export const TEAMMATES_WORKLOGS: ITeammateWorkLog[] = [
  {
    teammateName: 'Pavel Saikov',
    worklogItems: [
      { hours: 1, description: 'add routing' },
      { hours: 5, description: 'about authors page' },
    ],
  },
  {
    teammateName: 'Tanya',
    worklogItems: [
      { hours: 2, description: 'app design' },
      { hours: 4, description: 'app logo and header' },
      { hours: 2, description: 'base structure for poets page' },
      { hours: 1, description: 'search field for poets page' },
    ],
  },
  {
    teammateName: 'Artsem',
    worklogItems: [
      { hours: 0.5, description: 'initialize project repository' },
      { hours: 3, description: 'add material theme, colors and fonts' },
      { hours: 1.5, description: 'greetings component' },
    ],
  },
  {
    teammateName: 'Doge',
    worklogItems: [
      { hours: 3, description: 'base app interfaces and info about poets' },
      { hours: 4, description: 'widget with random author' },
    ],
  },
];
