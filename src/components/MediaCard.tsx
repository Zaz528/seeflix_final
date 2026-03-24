import { MediaType } from '../data/media';
import './MediaCard.css';

interface MediaCardProps {
  title: string;
  cover: string;
  rating: number;
  type: MediaType;
}

function MediaCard({ title, cover, rating, type }: MediaCardProps) {
  return (
    <div className="media-card">
      <div className="media-card__cover">
        <img
          src={cover}
          alt={title}
          className="media-card__img"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://placehold.co/160x240/141e32/94a3b8?text=' + encodeURIComponent(title);
          }}
        />
        <span className={`media-card__badge media-card__badge--${type}`}>
          {type === 'movie' ? 'Film' : 'Série'}
        </span>
      </div>
      <h3 className="media-card__title">{title}</h3>
      <div className="media-card__rating">
        Note : <strong className="media-card__rating-value">{rating}</strong>
      </div>
    </div>
  );
}

export default MediaCard;
