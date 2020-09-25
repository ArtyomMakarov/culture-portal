import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: "Yuri_Igorevich",
  name: 'Yuri Igorevich Gumenyuk',
  liveTime: 'September 24, 1969 — January 19, 2013',
  photo: './assets/img/poets-img/Juryj_Humianiuk_w_Warszawie_4.jpg',
  biography: 'Belarusian poet, novelist, journalist',
  timeline: [
    {
      date: '1994',
      description:
        'He graduated from the Grodno state University named Yanka Kupala, Department of Polish studies, he studied in graduate school with him',
    },
    {
      date: '1991-1994',
      description:
        'The Grodno regional radio prepared a literary and artistic radio magazine «Context»',
    },
    {
      date: '1992, 1995—2001',
      description: 'Worked as a journalist for the newspaper «Pogonya»',
    },
    {
      date: '2004',
      description: 'Worked as a journalist for the newspaper «Day»',
    },
    {
      date: '1994-2000',
      description:
        'Worked as the head of the literary part of the Grodno puppet theater',
    },
    {
      date: '2002',
      description: 'Publicist of the Bialystok monthly «Czasopis»',
    },
  ],
  works: [
    {
      date: '1992',
      work: 'Body format',
    },
    {
      date: '1994',
      work: 'The Face of Tutankhamun',
    },
    {
      date: '1999',
      work: 'Ritual',
    },
    {
      date: '2003',
      work: 'Tiger Orchid street. Poems 1987-2002',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/img4_orig.jpg',
    },
    {
      photo: './assets/img/poets-img/gum.jpg',
    },
    {
      photo: './assets/img/poets-img/y.jpeg',
    },
    {
      photo: './assets/img/poets-img/Juryj_Humianiuk_w_Warszawie_4.jpg',
    },
  ],
  youtube: '',
  activity: [
    {
      lat: '53.6884000',
      lon: '23.8258000',
    },
  ],
};
