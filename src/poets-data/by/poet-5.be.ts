import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: "Yuri_Igorevich",
  name: 'Юрый Ігаравіч Гумянюк',
  liveTime: '24 верасня 1969 — 19 студзеня 2013 года',
  photo: './assets/img/poets-img/Juryj_Humianiuk_w_Warszawie_4.jpg',
  biography: 'Беларускі паэт, празаік, журналіст',
  timeline: [
    {
      date: '1994',
      description:
        'Скончыў Гродзенскі дзяржаўны ўніверсітэт імя Янкі Купалы, аддзяленне паланістыкі, вучыўся ў аспірантуры пры ім',
    },
    {
      date: '1991-1994',
      description:
        'На Гарадзенскім абласным радыё рыхтаваў літаратурна-мастацкі радыёчасопіс «Кантэкст»',
    },
    {
      date: '1992, 1995—2001',
      description: 'Працаваў журналістам у газеце «Пагоня»',
    },
    {
      date: '2004',
      description: 'Працаваў журналістам у газеце «День»',
    },
    {
      date: '1994-2000',
      description:
        'Працаваў загадчыкам літаратурнай часткі Гарадзенскага тэатра лялек',
    },
    {
      date: '2002',
      description: 'Публіцыст Беластоцкага месячніка «Часопіс»',
    },
  ],
  works: [
    {
      date: '1992',
      work: 'Фармат цела',
    },
    {
      date: '1994',
      work: 'Твар Тутанхамона',
    },
    {
      date: '1999',
      work: 'Рытуал',
    },
    {
      date: '2003',
      work: 'Вуліца тыгровых архідэй. Вершы 1987-2002',
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
