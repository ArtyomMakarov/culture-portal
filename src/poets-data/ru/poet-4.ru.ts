import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  name: 'Влади́мир Вячесла́вович Ада́мчик',
  liveTime: '29 сентября 1958 (61 год) - xxxx',
  photo: './assets/img/poets-img/Adam_Globus.jpg',
  biography: 'советский и белорусский писатель, поэт, художник, издатель',
  timeline: [
    {
      date: '1959',
      description: 'живёт в Минске',
    },
    {
      date: '1977',
      description:
        'Окончил педагогическое отделение Минского художественного училища им. А. К. Глебова',
    },
    {
      date: '1983',
      description:
        'Окончил художественное отделение Белорусского театрально-художественного института',
    },
    {
      date: '1987',
      description:
        'Работал чертёжником, художником-реставратором, художником-оформителем, редактором журнала «Родник»',
    },
  ],
  works: [
    {
      date: '1981',
      work: 'еженедельник «Літаратура і мастацтва», журнал «Маладосць»',
    },
    {
      date: '1991',
      work: 'Оборотни',
    },
    {
      date: '1993',
      work: 'Demonokameron',
    },
    {
      date: '2007',
      work: 'Лирика BY',
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
