import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  name: 'Уладзімір Вячаслававіч Адамчык',
  liveTime: '29 верасня 1958 (61 год) - xxxx',
  photo: './assets/img/poets-img/Adam_Globus.jpg',
  biography: 'савецкі і беларускі пісьменнік, паэт, мастак, выдавец',
  timeline: [
    {
      date: '1959',
      description: 'Жыве ў Мінску',
    },
    {
      date: '1977',
      description:
        'Скончыў педагагічнае аддзяленне Мінскага мастацкага вучылішча ім. А. К. Глебава',
    },
    {
      date: '1983',
      description:
        'Скончыў мастацкае аддзяленне Беларускага тэатральна-мастацкага інстытута',
    },
    {
      date: '1987',
      description:
        'Працаваў чарцёжнікам, мастаком-рэстаўратарам, мастаком-афарміцелем, рэдактарам часопіса «Крыніца»',
    },
  ],
  works: [
    {
      date: '1981',
      work: 'Штотыднёвік" Літаратура і мастацтва", Часопіс «Маладосць»',
    },
    {
      date: '1991',
      work: 'Пярэваратні',
    },
    {
      date: '1993',
      work: 'Demonokameron',
    },
    {
      date: '2007',
      work: 'Лірыка BY',
    },
  ],
  galery: [
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
