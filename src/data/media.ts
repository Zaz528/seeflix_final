export type MediaType = 'movie' | 'tvshow';

export interface MediaItem {
  id: number;
  title: string;
  cover: string;
  rating: number;
  type: MediaType;
}

export const allMedia: MediaItem[] = [
  // ── Movies ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Inception',
    cover: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    rating: 8.8,
    type: 'movie',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    cover: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    rating: 9.0,
    type: 'movie',
  },
  {
    id: 3,
    title: 'Interstellar',
    cover: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    rating: 8.6,
    type: 'movie',
  },
  {
    id: 4,
    title: 'Avatar',
    cover: 'https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
    rating: 7.9,
    type: 'movie',
  },
  {
    id: 5,
    title: 'Avengers: Endgame',
    cover: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    rating: 8.4,
    type: 'movie',
  },
  {
    id: 6,
    title: 'The Matrix',
    cover: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    rating: 8.7,
    type: 'movie',
  },
  {
    id: 7,
    title: 'Pulp Fiction',
    cover: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    rating: 8.9,
    type: 'movie',
  },
  {
    id: 8,
    title: 'The Godfather',
    cover: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    rating: 9.2,
    type: 'movie',
  },
  {
    id: 9,
    title: 'Fight Club',
    cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    rating: 8.8,
    type: 'movie',
  },
  {
    id: 10,
    title: 'Titanic',
    cover: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    rating: 7.9,
    type: 'movie',
  },
  {
    id: 11,
    title: 'Joker',
    cover: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    rating: 8.4,
    type: 'movie',
  },
  {
    id: 12,
    title: 'Black Panther',
    cover: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    rating: 7.3,
    type: 'movie',
  },

  // ── TV Shows ─────────────────────────────────────────────────────────────
  {
    id: 13,
    title: 'Breaking Bad',
    cover: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    rating: 9.5,
    type: 'tvshow',
  },
  {
    id: 14,
    title: 'Stranger Things',
    cover: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    rating: 8.7,
    type: 'tvshow',
  },
  {
    id: 15,
    title: 'Game of Thrones',
    cover: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    rating: 9.2,
    type: 'tvshow',
  },
  {
    id: 16,
    title: 'The Witcher',
    cover: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg',
    rating: 8.2,
    type: 'tvshow',
  },
  {
    id: 17,
    title: 'The Mandalorian',
    cover: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    rating: 8.8,
    type: 'tvshow',
  },
  {
    id: 18,
    title: 'Dark',
    cover: 'https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
    rating: 8.8,
    type: 'tvshow',
  },
  {
    id: 19,
    title: 'Money Heist',
    cover: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    rating: 8.3,
    type: 'tvshow',
  },
  {
    id: 20,
    title: 'Peaky Blinders',
    cover: 'https://image.tmdb.org/t/p/w500/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg',
    rating: 8.8,
    type: 'tvshow',
  },
  {
    id: 21,
    title: 'Black Mirror',
    cover: 'https://image.tmdb.org/t/p/w500/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.jpg',
    rating: 8.3,
    type: 'tvshow',
  },
  {
    id: 22,
    title: 'The Crown',
    cover: 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg',
    rating: 8.7,
    type: 'tvshow',
  },
  {
    id: 23,
    title: 'Narcos',
    cover: 'https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg',
    rating: 8.8,
    type: 'tvshow',
  },
  {
    id: 24,
    title: 'Squid Game',
    cover: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    rating: 8.0,
    type: 'tvshow',
  },
];

export const trendingMovies = allMedia.filter((m) => m.type === 'movie');
export const topShows = allMedia.filter((m) => m.type === 'tvshow');
