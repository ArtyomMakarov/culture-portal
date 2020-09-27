import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Vladimir_Adamchik',
  name: 'Vladimir Vyacheslavovich Adamchik',
  liveTime: 'September 29, 1958 (age 61) - xxxx',
  photo: './assets/img/poets-img/Adamchik.jpg',
  biography: 'Soviet and Belarusian writer, poet, artist, publisher',
  timeline: [
    {
      date: '1959',
      description: 'Lives in Minsk',
    },
    {
      date: '1977',
      description:
        'Graduated from the pedagogical Department of the Minsk art school named after A. K. Glebov',
    },
    {
      date: '1983',
      description:
        'Graduated from the art Department of the Belarusian theater and art Institute',
    },
    {
      date: '1987',
      description:
        'Worked as a draftsman, restorer, designer, editor of the magazine «Rodnik»',
    },
  ],
  works: [
    {
      date: '1981',
      work: 'The weekly «literature and art», the magazine «youth»',
    },
    {
      date: '1991',
      work: 'Werewolves',
    },
    {
      date: '1993',
      work: 'Demonokameron',
    },
    {
      date: '2007',
      work: 'Lyrics BY',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/img3_orig.jpg',
    },
    {
      photo: './assets/img/poets-img/a.jpg',
    },
    {
      photo: './assets/img/poets-img/g.jpg',
    },
    {
      photo: './assets/img/poets-img/ag.jpg',
    },
  ],
  youtube: 'https://www.youtube.com/watch?v=2eVcgft9gpY',
  activity: [
    {
      lat: '53.6832000',
      lon: '27.1380000',
    },
  ],
};
