import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  name: 'Girsh Solomonovich Relay s',
  liveTime: 'April 23, 1913 - September 18, 2004 (age 91)',
  photo: './assets/img/poets-img/Reles_G.jpg',
  biography:
    'A Jewish writer, he wrote in Yiddish, Belarusian and Russian.',
  timeline: [
    {
      date: '1913',
      description:
        'Born in the family of Melamed (teacher in cheder) and Hebrew poet Leib Reles in Chashniki',
    },
    {
      date: '1930',
      description:
        'Published his first poem in Yiddish in the newspaper «Junger Arbeiter»',
    },
    {
      date: '1936',
      description: 'Member of the Jewish section of the BSSR writers Union',
    },
    {
      date: '1937',
      description: 'excluded from the Jewish section of the BSSR writers Union',
    },
  ],
  works: [
    {
      date: '1939',
      work: '«Anhab» ("Start")',
    },
    {
      date: '1960',
      work: 'Notes from my colleague',
    },
    {
      date: '1963',
      work: 'Friends and acquaintances',
    },
    {
      date: '1966',
      work: 'Behind tight desks',
    },
    {
      date: '1972',
      work: 'In the native corner',
    },
    {
      date: '1976',
      work: 'Through a difficult threshold',
    },
    {
      date: '1979',
      work: 'Under every roof',
    },
    {
      date: '2004',
      work: 'Jewish Soviet writers of Belarus',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/r.jpg',
    },
    {
      photo: './assets/img/poets-img/re.jpg',
    },
    {
      photo: './assets/img/poets-img/rel.jpg',
    },
  ],
  youtube: '',
  activity: [
    {
      lat: '54.8584000',
      lon: '29.1608000',
    },
  ],
};
