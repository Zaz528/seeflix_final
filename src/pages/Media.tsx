import { useState } from 'react';
import Navbar from '../components/Navbar';
import MediaCard from '../components/MediaCard';
import Footer from '../components/Footer';
import { allMedia, MediaType } from '../data/media';
import './Media.css';

type Filter = 'all' | MediaType;

function Media() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all'
    ? allMedia
    : allMedia.filter((item) => item.type === filter);

  return (
    <div>
      <Navbar />
      <main className="media-page">
        <div className="media-page__inner">
          <h1 className="media-page__heading">Catalogue</h1>
          <p className="media-page__sub">Découvrez l'ensemble de notre catalogue : films et séries réunis.</p>

          <div className="media-page__filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Tout ({allMedia.length})
            </button>
            <button
              className={`filter-btn ${filter === 'movie' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('movie')}
            >
              Films ({allMedia.filter((m) => m.type === 'movie').length})
            </button>
            <button
              className={`filter-btn ${filter === 'tvshow' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('tvshow')}
            >
              Séries ({allMedia.filter((m) => m.type === 'tvshow').length})
            </button>
          </div>

          <div className="media-page__grid">
            {filtered.map((item) => (
              <MediaCard
                key={item.id}
                title={item.title}
                cover={item.cover}
                rating={item.rating}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Media;
