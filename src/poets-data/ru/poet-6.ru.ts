import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Girsh_Relay s',
  name: 'Гирш Соломонович Релес',
  liveTime: '23 апреля 1913 - 18 сентября 2004 (91 год)',
  photo: './assets/img/poets-img/Reles.jpg',
  biography:
    'еврейский писатель, писал на идише, белорусском и русском языках.',
  timeline: [
    {
      date: '1913',
      description:
        'Родился в семье меламеда (учителя в хедере) и поэта на иврите Лейба Релеса в Чашниках',
    },
    {
      date: '1930',
      description:
        'Опубликовал первое стихотворение на идише в газете «Юнгер Арбэтэр»',
    },
    {
      date: '1936',
      description: 'Член еврейской секции Союза писателей БССР',
    },
    {
      date: '1937',
      description: 'исключён из еврейской секции Союза писателей БССР',
    },
  ],
  works: [
    {
      date: '1939',
      work: '«Онхейб» («Начало»)',
    },
    {
      date: '1960',
      work: 'Записки моего коллеги',
    },
    {
      date: '1963',
      work: 'Друзья и знакомые',
    },
    {
      date: '1966',
      work: 'За тесными партами',
    },
    {
      date: '1972',
      work: 'В родном уголке',
    },
    {
      date: '1976',
      work: 'Через трудный порог',
    },
    {
      date: '1979',
      work: 'Под каждой крышей',
    },
    {
      date: '2004',
      work: 'Еврейские советские писатели Белоруссии',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/img5_orig.jpg',
    },
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
