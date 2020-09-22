import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  name: 'Anatoly Stepanovich Melugin',
  liveTime: '27 December 1923 - 24 October 1994 (70 лет)',
  photo: './assets/img/poets-img/Vialugin.jpg',
  biography:
    'Belarusian Soviet poet, novelist and translator, screenwriter. Winner of the Yanka Kupala Literary award (1964)',
  timeline: [
    {
      date: '1939-1940',
      description:
        'As a student of the literary faculty of the Minsk pedagogical Institute, he worked in the editorial office of the newspaper "Zvezda»',
    },
    {
      date: '1941',
      description: 'He studied at the Sverdlovsk pedagogical Institute',
    },
    {
      date: '1942',
      description:
        'He was drafted into the red army, studied at the Luhansk aviation school, and participated in the battles on the Stalingrad front',
    },
    {
      date: '1943',
      description: 'He was injured and was treated for a long time',
    },
    {
      date: '1945-1946',
      description: 'He worked for the newspaper «Literature and art»',
    },
    {
      date: '1948',
      description:
        'Graduated from the Maxim Gorky Minsk pedagogical Institute in absentia',
    },
    {
      date: '1946-1984',
      description:
        'With short breaks, he worked as an editor of the poetry Department of the magazine «Polymya»',
    },
  ],
  works: [
    {
      date: '1947',
      work: 'Salute in Minsk',
    },
    {
      date: '1949',
      work: 'Negorelsky arch',
    },
    {
      date: '1952',
      work: 'On the approaches',
    },
    {
      date: '1958',
      work: 'On Zori takes',
    },
    {
      date: '1960',
      work: 'Wide open',
    },
    {
      date: '1964',
      work: 'Love address',
    },
    {
      date: '1969',
      work: 'Poems and ballads',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/v.jpg',
    },
    {
      photo: './assets/img/poets-img/av.jpg',
    },
    {
      photo: './assets/img/poets-img/avv.jpg',
    },
  ],
  youtube: 'https://www.youtube.com/watch?v=0pZZW0LocrA',
  activity: [
    {
      lat: '54.83',
      lon: '29.9295',
    },
  ],
};
