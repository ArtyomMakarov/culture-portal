import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  name: 'Юрий Игоревич Гуменюк',
  liveTime: '24 сентября 1969 — 19 января 2013',
  photo: './assets/img/poets-img/Juryj_Humianiuk_w_Warszawie_4.jpg',
  biography: 'белорусский поэт, прозаик, журналист',
  timeline: [
    {
      date: '1994',
      description:
        'Окончил Гродненский государственный университет имени Янки Купалы, отделение полонистики, учился в аспирантуре при нём',
    },
    {
      date: '1991-1994',
      description:
        'На гродненском областном радио готовил литературно-художественный радиожурнал «Контекст»',
    },
    {
      date: '1992, 1995—2001',
      description: 'Работал журналистом в газете «Погоня»',
    },
    {
      date: '2004',
      description: 'Работал журналистом в газете «День»',
    },
    {
      date: '1994-2000',
      description:
        'работал заведующим литературной частью Гродненского театра кукол',
    },
    {
      date: '2002',
      description: 'публицист белостокского месячника «Czasopis»',
    },
  ],
  works: [
    {
      date: '1992',
      work: 'Формат тела',
    },
    {
      date: '1994',
      work: 'Лицо Тутанхамона',
    },
    {
      date: '1999',
      work: 'Ритуал',
    },
    {
      date: '2003',
      work: 'Улица тигровых орхидей. Стихи 1987—2002',
    },
  ],
  galery: [
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
