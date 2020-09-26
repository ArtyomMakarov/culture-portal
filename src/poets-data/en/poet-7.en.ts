import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Alexander_Poskrebyshev',
  name: 'Alexander Stepanovich Poskrebyshev',
  liveTime: 'April 13, 1935 - August 6, 2007 (72 years old)',
  photo: './assets/img/poets-img/Poskrebyshev_A_S.jpg',
  biography: "Belarusian novelist, poet, children's writer.",
  timeline: [
    {
      date: '1935',
      description:
        'Born in Russia, in the village of Antipintsy, Kirov region, now Uninsky district, Kirov region, moved to Belarus as a child',
    },
    {
      date: '1951',
      description:
        'At the age of 16, he lost his sight, but was able to become a medical professional. He lived in the village of «Naroch», worked as a masseur in the sanatorium «Naroch»',
    },
    {
      date: '1969',
      description:
        'The first story «Sparrows» was published in the magazine «Vyaselka». The first book «Terrible gander»',
    },
    {
      date: '2007',
      description: 'Died in 2007. He was buried in the cemetery in d. Naroch.',
    },
  ],
  works: [
    {
      date: '1969',
      work: 'Scary gander',
    },
    {
      date: '1973',
      work: 'Bunch of Rowan',
    },
    {
      date: '1976',
      work: 'Living ring',
    },
    {
      date: '1980',
      work: 'Nikolka the hunter',
    },
    {
      date: '1987',
      work: 'Nikolova trip',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/img6_orig.jpg',
    },
    {
      photo: './assets/img/poets-img/Poskrebyshev_A_S.jpg',
    },
    {
      photo: './assets/img/poets-img/ap.jpg',
    },
    {
      photo: './assets/img/poets-img/as.jpg',
    },
  ],
  youtube: '',
  activity: [
    {
      lat: '55.4241900',
      lon: '37.5547200',
    },
  ],
};
