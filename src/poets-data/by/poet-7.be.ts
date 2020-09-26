import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Alexander_Poskrebyshev',
  name: 'Александр Степанович Поскребышев',
  liveTime: '13 апреля 1935-6 августа 2007 (72 года)',
  photo: './assets/img/poets-img/Poskrebyshev_A_S.jpg',
  biography: 'Белорусский прозаик, поэт, детский писатель.',
  timeline: [
    {
      date: '1935',
      description:
        'Родился в России, в деревне Антипинцы Кировского края, сейчас Унинский район Кировской области, в детском возрасте переехал в Белоруссию',
    },
    {
      date: '1951',
      description:
        'В 16 лет лишился зрения, однако смог стать медицинским работником. Жил в к. п. Нарочь, работал массажистом в санатории «Нарочь»',
    },
    {
      date: '1969',
      description:
        'Первый рассказ «Воробьи» был впечатан в журнале «Радуга». Первая книга «Страшный гусак»',
    },
    {
      date: '2007',
      description: 'Умер в 2007 году. Похоронен на кладбище в д. Нарочь.',
    },
  ],
  works: [
    {
      date: '1969',
      work: 'Страшный гусак',
    },
    {
      date: '1973',
      work: 'Гроздь рябины',
    },
    {
      date: '1976',
      work: 'Живое кольцо',
    },
    {
      date: '1980',
      work: 'Николка-охотник',
    },
    {
      date: '1987',
      work: 'Николкова командировка',
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
