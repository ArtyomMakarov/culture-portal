import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: "Marina_Mikhailovna",
  name: 'Марина Михайловна Веселуха',
  liveTime: '15 июля 1987, Миоры, Витебская область - xxxx',
  photo: './assets/img/poets-img/VesjaluchaMaryna.jpg',
  biography:
    'белорусский литературный критик, литературовед, поэт, переводчик',
  timeline: [
    {
      date: '2004',
      description:
        'Окончила Мижевицкую среднюю школу (Гродненская область, Слонимский район) с золотой медалью',
    },
    {
      date: '2011',
      description: 'Магистр филологических наук в области литературоведения',
    },
    {
      date: '2010-2016',
      description:
        'Редактор, завотделом «Книжный мир» газеты «Літаратура і мастацтва»',
    },
    {
      date: '2016',
      description:
        'Редактор отдела культуры в центральной белорусской газете «Звязда»',
    },
  ],
  works: [
    {
      date: '2008',
      work:
        'Дебютировала стихами в журнале «Дзеяслоў». Выступает с материалами о теории современного литературного процесса, пишет критические статьи, рецензии на книги, занимается литературно-художественным творчеством',
    },
    {
      date: '2013',
      work:
        'одна из победителей конкурса молодых критиков имени Адама Бабареко.',
    },
    {
      date: '2015',
      work:
        'диплом лауреата в номинации «Лучший обозреватель» по итогам ХІ национального конкурса печатных изданий «Залатая Ліцера»',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/img2_orig.jpg',
    },
    {
      photo: './assets/img/poets-img/VesjaluchaMaryna.jpg',
    },
    {
      photo: './assets/img/poets-img/VesjaluchaMaryna.jpg',
    },
    {
      photo: './assets/img/poets-img/VesjaluchaMaryna.jpg',
    },
  ],
  youtube: 'https://www.youtube.com/watch?v=0pZZW0LocrA',
  activity: [
    {
      lat: '55.6222000',
      lon: '27.6281000',
    },
  ],
};
