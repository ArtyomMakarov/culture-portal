import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Girsh_Relay s',
  name: 'Гірш Саламонавіч Рэлес',
  liveTime: '23 красавіка 1913 - 18 верасня 2004 (91 год)',
  photo: './assets/img/poets-img/Reles_G.jpg',
  biography:
    'Габрэйскі пісьменнік, пісаў на мове ідыш, беларускай і рускай мовах.',
  timeline: [
    {
      date: '1913',
      description:
        "Нарадзіўся ў сям'і меламеда (настаўніка ў хедэры) і паэта на іўрыце Лейба Релеса ў Чашніках",
    },
    {
      date: '1930',
      description:
        'Апублікаваў першы верш на мове ідыш у газеце «Юнгер Арбэтэр»',
    },
    {
      date: '1936',
      description: 'Член яўрэйскай секцыі Саюза пісьменнікаў БССР',
    },
    {
      date: '1937',
      description: 'выключаны з яўрэйскай секцыі Саюза пісьменнікаў БССР',
    },
  ],
  works: [
    {
      date: '1939',
      work: '«Онхейб» («Пачатак»)',
    },
    {
      date: '1960',
      work: 'Запіскі майго калегі',
    },
    {
      date: '1963',
      work: 'Сябры і знаёмыя',
    },
    {
      date: '1966',
      work: 'За цеснымі партамі',
    },
    {
      date: '1972',
      work: 'У родным кутку',
    },
    {
      date: '1976',
      work: 'Праз цяжкі парог',
    },
    {
      date: '1979',
      work: 'Пад кожным дахам',
    },
    {
      date: '2004',
      work: 'Яўрэйскія савецкія пісьменнікі Беларусі',
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
