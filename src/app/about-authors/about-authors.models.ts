export interface ITeammate {
  name: string;
  surname: string;
  city: string;
  country: string;
  photoName: string;
  github: string;
}

export const TEAMMATES: ITeammate[] = [
  {
    name: 'Pavel',
    surname: 'Saikov',
    city: 'Minsk',
    country: 'Belarus',
    photoName: 'pavel-saikov.jpg',
    github: 'pavelSaikov',
  },
  {
    name: 'Nikita',
    surname: 'Belykov',
    city: 'Moscow',
    country: 'Russia',
    photoName: 'nikita-belykov.jpg',
    github: 'NikBel77',
  },
  {
    name: 'Tatiana',
    surname: 'Kastrubai',
    city: 'Minsk',
    country: 'Belarus',
    photoName: 'tatiana-kastrubai.jpg',
    github: 'kastrubait',
  },
  {
    name: 'Artsem',
    surname: 'Makarov',
    city: 'Minsk',
    country: 'Belarus',
    photoName: 'artem-makarov.jpg',
    github: 'ArtyomMakarov',
  },
  {
    name: 'Konstantin',
    surname: 'Kravtsov',
    city: 'Minsk',
    country: 'Belarus',
    photoName: 'konstantin-kravtsov.png',
    github: 'Yeeeeee1',
  },
  {
    name: 'Gleb',
    surname: 'Zhidovich',
    city: 'Minsk',
    country: 'Belarus',
    photoName: 'gleb-zhidovich.jpg',
    github: 'GlebZhidovich',
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
    teammateName: 'Tatiana Kastrubai',
    worklogItems: [
      { hours: 2, description: 'app design' },
      { hours: 4, description: 'app logo and header' },
      { hours: 2, description: 'base structure for poets page' },
      { hours: 1, description: 'search field for poets page' },
    ],
  },
  {
    teammateName: 'Artsem Makarov',
    worklogItems: [
      { hours: 0.5, description: 'initialize project repository' },
      { hours: 3, description: 'add material theme, colors and fonts' },
      { hours: 1.5, description: 'greetings component' },
      {
        hours: 1.5,
        description: 'adaptive design for greetings component, header styles',
      },
    ],
  },
  {
    teammateName: 'Doge',
    worklogItems: [
      { hours: 3, description: 'base app interfaces and info about poets' },
      { hours: 4, description: 'widget with random author' },
      {
        hours: 2,
        description: 'adaptive design for widget with random author',
      },
    ],
  },
  {
    teammateName: 'Nikita Belykov',
    worklogItems: [
      { hours: 3, description: 'project structure' },
      { hours: 2, description: 'translation library' },
      {
        hours: 4,
        description: 'implement modules for map, home page and translator',
      },
      { hours: 1, description: 'animated routing' },
    ],
  },
];
