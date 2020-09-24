import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  name: 'Marina Mikhailovna Veselukha',
  liveTime: 'July 15, 1987, Miory, Vitebsk region - xxxx',
  photo: './assets/img/poets-img/VesjaluchaMaryna.jpg',
  biography:
    'Belarusian literary critic, literary critic, poet, translator',
  timeline: [
    {
      date: '2004',
      description:
        'Majevicka graduated from high school (Grodno region, Slonim district) with a gold medal',
    },
    {
      date: '2011',
      description: 'Master of Philology in literary studies',
    },
    {
      date: '2010-2016',
      description:
        'Editor, head of the Department «Book world» of the newspaper «Litaratura I Mastatstva»',
    },
    {
      date: '2016',
      description:
        'Editor of the culture Department in the Central Belarusian newspaper Zvyazda',
    },
  ],
  works: [
    {
      date: '2008',
      work:
        'Made his debut with poems in the journal «Dziejasłoŭ». He provides materials on the theory of the modern literary process, writes critical articles, book reviews, and is engaged in literary and artistic creativity',
    },
    {
      date: '2013',
      work:
        'One of the winners of the young critics name Adam Babareka.',
    },
    {
      date: '2015',
      work:
        'Diploma of the winner in the category «Best columnist» based on the results of the XI national competition of printed publications «Zalataya Litsera»',
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
